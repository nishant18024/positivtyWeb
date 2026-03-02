import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface WebinarHost {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

interface WebinarOutlineItem {
  title: string;
  content: string;
}

interface Webinar {
  id: number;
  title: string;
  description: string;
  about?: string;
  webinar_date: string; // YYYY-MM-DD
  time: string;
  tags?: string[];
  host?: WebinarHost;
  imageUrl?: string;
  outline?: WebinarOutlineItem[];
  status: 'Active' | 'Paused';
}

interface Session {
  id: string;
  title: string;
  description: string;
  speaker: string;
  date: string;
  day: string;
  month: string;
  time: string;
  tag: string;
  selected: boolean;
}

type RegistrationView = 'registration' | 'success' | 'already-registered';

const ALL_WEBINARS: Webinar[] = [
  {
    id: 1,
    title: "Hear Me, Don't Fix Me: Building Emotional Safety for Women in Marriage",
    description: "If you are a woman in marriage or about to get married, or if you are seeking emotional understanding in your relationship — this session is for you.",
    about: "If you are a woman in marriage or about to get married, or if you are seeking emotional understanding in your relationship — this session is for you. We explore the science of emotional safety, how to communicate needs clearly, and how to build a marriage grounded in mutual respect.",
    webinar_date: '2026-03-05',
    time: '4:00 PM IST',
    tags: ['Marriage', 'Emotional Safety', 'Communication'],
    host: {
      name: 'Dr. Priya Mehta',
      role: 'Relationship Therapist',
      bio: 'Dr. Priya Mehta is an experienced relationship therapist with a passion for making evidence-based mental health insights accessible to everyone.',
      avatar: 'DP'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'Introduction', content: 'Setting the context and what to expect from this session' },
      { title: 'Core Concepts', content: 'Deep dive into the key ideas and evidence-based frameworks' },
      { title: 'Practical Strategies', content: 'Tools and techniques you can apply immediately' },
      { title: 'Q&A & Takeaways', content: 'Open questions and your personalised action plan' }
    ],
    status: 'Active',
  },
  {
    id: 2,
    title: 'Building Resilience at Work',
    description: 'How high-performers stay grounded under pressure and bounce back faster. Evidence-backed strategies for mental toughness.',
    about: 'In this high-impact session, we delve into the psychological foundations of resilience. You will learn how to maintain composure during crises, manage chronic stress, and develop a growth mindset that turns setbacks into springboards for success.',
    webinar_date: '2026-03-12',
    time: '6:30 PM IST',
    tags: ['Resilience', 'Workplace', 'Burnout'],
    host: {
      name: 'Arun Sharma',
      role: 'Organisational Psychologist',
      bio: 'Arun Sharma specializes in workplace performance and mental wellbeing, helping teams navigate high-pressure environments with clarity and confidence.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'Defining Resilience', content: 'Understanding the 4 pillars of psychological resilience' },
      { title: 'Stress Management', content: 'Biological and psychological triggers of work stress' },
      { title: 'The Growth Mindset', content: 'Practical exercises to reframe challenges' },
      { title: 'Building a Routine', content: 'Sustainable habits for long-term mental toughness' }
    ],
    status: 'Active',
  },
  {
    id: 3,
    title: 'Sleep, Stress & Recovery',
    description: 'The science of sleep architecture and practical rituals for deeper, more restorative rest and stress management.',
    about: 'Quality sleep is the ultimate performance enhancer. This webinar reveals the science behind sleep cycles and how stress disrupts them. Discover actionable rituals to improve your sleep hygiene and maximize your body\'s natural recovery processes.',
    webinar_date: '2026-03-19',
    time: '7:00 PM IST',
    tags: ['Sleep', 'Recovery', 'Stress'],
    host: {
      name: 'Dr. Karan Singh',
      role: 'Sleep Specialist',
      bio: 'Dr. Karan Singh is a renowned sleep researcher dedicated to helping individuals optimize their rest for better mental and physical health.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'Sleep Architecture', content: 'Understanding REM and Deep Sleep cycles' },
      { title: 'Stress & Cortisol', content: 'How your body\'s stress response affects your rest' },
      { title: 'The Perfect Wind-down', content: 'Designing a science-backed evening ritual' },
      { title: 'Morning Optimization', content: 'Aligning with your circadian rhythm' }
    ],
    status: 'Active',
  },
  {
    id: 4,
    title: 'Mindful Communication',
    description: 'Non-violent communication techniques and empathy-building practices that transform relationships and team dynamics.',
    about: 'Master the art of expressing your needs without blame. This session introduces Non-Violent Communication (NVC) frameworks to help you navigate difficult conversations, build deep empathy, and foster collaborative environments in both personal and professional life.',
    webinar_date: '2026-03-26',
    time: '6:00 PM IST',
    tags: ['Mindfulness', 'Communication'],
    host: {
      name: 'Sarah Adams',
      role: 'Communication Coach',
      bio: 'Sarah Adams has coached thousands of leaders in effective communication and conflict resolution using mindful practices.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'The 4 Components of NVC', content: 'Observations, Feelings, Needs, and Requests' },
      { title: 'Active Listening', content: 'The power of presence in conversation' },
      { title: 'Managing Triggers', content: 'Techniques for staying calm during conflict' },
      { title: 'Empathy in Action', content: 'Building bridges through understanding' }
    ],
    status: 'Active',
  },
  {
    id: 5,
    title: 'Burnout Prevention & Recovery',
    description: 'Identify early warning signals of burnout and build sustainable energy management habits for long-term health.',
    about: 'Don\'t wait until you\'re exhausted to make a change. Learn to recognize the subtle signs of burnout before they become overwhelming. This session provides a roadmap for energy management, boundaries, and recovery strategies that work.',
    webinar_date: '2026-04-02',
    time: '6:30 PM IST',
    tags: ['Burnout', 'Health'],
    host: {
      name: 'Michael Chen',
      role: 'Wellness Expert',
      bio: 'Michael Chen focuses on holistic health and sustainable lifestyle changes for high-achieving professionals.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'Red Flags', content: 'Identifying the early stages of burnout' },
      { title: 'Energy Management', content: 'Moving beyond time management to energy focus' },
      { title: 'Setting Boundaries', content: 'The art of saying "no" for your wellbeing' },
      { title: 'Recovery Protocols', content: 'Steps for bouncing back from exhaustion' }
    ],
    status: 'Active',
  },
  {
    id: 6,
    title: 'Parenting & Mental Health',
    description: 'Frameworks for managing parental stress and modelling emotional intelligence for children in a digital age.',
    about: 'Parenting is one of life\'s greatest challenges and rewards. We explore evidence-based strategies to manage parental stress, foster emotional intelligence in children, and maintain your own identity and mental health while raising a family today.',
    webinar_date: '2026-04-09',
    time: '7:00 PM IST',
    tags: ['Parenting', 'Psychology'],
    host: {
      name: 'Dr. Emily Watson',
      role: 'Child Psychologist',
      bio: 'Dr. Emily Watson specializes in family systems and child development, with a focus on emotional resilience.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'Parental Self-Care', content: 'Why your wellbeing is essential for your child' },
      { title: 'Emotional Intelligence', content: 'Teaching kids to name and tame their feelings' },
      { title: 'Digital Age Parenting', content: 'Navigating screens and social media' },
      { title: 'Open Communication', content: 'Building lifelong trust with your children' }
    ],
    status: 'Active',
  },
  {
    id: 7,
    title: 'Digital Wellbeing & Screen Fatigue',
    description: 'Research-backed strategies to reduce screen fatigue and reclaim focused, restorative time in an always-on world.',
    about: 'Are you constantly "on" but feeling increasingly disconnected? This webinar addresses the physical and mental tolls of excessive screen time. Learn practical techniques to reduce digital fatigue, improve focus, and create a healthier relationship with technology.',
    webinar_date: '2026-04-16',
    time: '6:30 PM IST',
    tags: ['Digital Health', 'Focus'],
    host: {
      name: 'James Wilson',
      role: 'Tech Wellbeing Consultant',
      bio: 'James Wilson helps individuals and organizations build healthy digital habits in the hybrid work era.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'The Toll of Tech', content: 'How screens affect your brain and eyes' },
      { title: 'Digital Minimilsm', content: 'Reclaiming your time from attention-economy apps' },
      { title: 'Focus Strategies', content: 'Deep work techniques for a distracted world' },
      { title: 'Technology Boundaries', content: 'Creating tech-free zones and times' }
    ],
    status: 'Active',
  },
  {
    id: 8,
    title: 'Self-Compassion as a Superpower',
    description: 'Practical exercises to build a kinder inner voice and improve resilience and performance through self-kindness.',
    about: 'We are often our own harshest critics. Self-compassion isn\'t about being soft; it\'s about building a resilient inner foundation. Discover how treating yourself with the same kindness you\'d show a friend can dramatically improve your performance and peace of mind.',
    webinar_date: '2026-04-23',
    time: '6:00 PM IST',
    tags: ['Self-Care', 'Confidence'],
    host: {
      name: 'Nina Gupta',
      role: 'Life Coach',
      bio: 'Nina Gupta empowers individuals to find their inner strength and lead more authentic, compassionate lives.'
    },
    imageUrl: 'assets/education.jpg',
    outline: [
      { title: 'The Inner Critic', content: 'Understanding the origins of self-judgment' },
      { title: 'Three Elements', content: 'Self-kindness, Common Humanity, and Mindfulness' },
      { title: 'Practical Exercises', content: 'building your self-compassion muscle' },
      { title: 'Resilience through Kindness', content: 'How self-compassion drives success' }
    ],
    status: 'Active',
  },
];

function localTodayStr(): string {
  const n = new Date();
  const yyyy = n.getFullYear();
  const mm = String(n.getMonth() + 1).padStart(2, '0');
  const dd = String(n.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

@Component({
  selector: 'app-webinar-registration3',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './webinar-registration3.component.html',
  styleUrls: ['./webinar-registration3.component.scss'],
})
export class WebinarRegistration3Component implements OnInit, OnDestroy {
  registrationData = {
    fullName: '',
    email: '',
    phone: '',
    organisation: ''
  };

  isRegistered = false;
  loading = false;
  errorMessage = '';
  redirectCountdown = 3;
  showDetails = false;
  showMoreSessions = false;
  private countdownInterval?: any;

  webinars: any[] = [];
  activeWebinar: any = null;

  ngOnInit(): void {
    // Transform ALL_WEBINARS to our local format
    this.webinars = ALL_WEBINARS
      .filter((w) => w.status === 'Active')
      .map((w) => {
        const [y, m, d] = w.webinar_date.split('-').map(Number);
        const dateObj = new Date(y, m - 1, d);
        return {
          id: w.id,
          title: w.title,
          description: w.description,
          fullDescription: w.about || w.description,
          date: dateObj,
          startTime: w.time,
          duration: '60 min',
          hostName: w.host?.name ?? 'Positivty Team',
          hostRole: w.host?.role ?? 'Webinar Host',
          hostInitials: this.getInitials(w.host?.name ?? 'PW'),
          image: w.imageUrl,
          tags: w.tags,
          agenda: w.outline?.map(o => ({ title: o.title, description: o.content })),
          selected: true,
          isSoon: this.daysUntil(w.webinar_date) <= 3
        };
      });

    this.activeWebinar = this.webinars[0];
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  get selectedSessions(): any[] {
    return this.webinars.filter((s) => s.selected);
  }

  get visibleWebinars(): any[] {
    return this.showMoreSessions ? this.webinars : this.webinars.slice(0, 3);
  }

  get allSelected(): boolean {
    return this.webinars.length > 0 && this.webinars.every(s => s.selected);
  }

  get daysLeft(): number | null {
    if (!this.activeWebinar?.date) return null;

    const today = new Date();
    const webinarDate = new Date(this.activeWebinar.date);

    const diffTime = webinarDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : null;
  }

  toggleAll(): void {
    const target = !this.allSelected;
    this.webinars.forEach(s => s.selected = target);
  }

  toggleSession(webinar: any): void {
    const found = this.webinars.find(w => w.id === webinar.id);
    if (found) {
      found.selected = !found.selected;
    }
  }

  isSelected(webinar: any): boolean {
    return this.webinars.find(w => w.id === webinar.id)?.selected || false;
  }

  scrollToForm(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setActiveWebinar(webinar: any): void {
    this.activeWebinar = webinar;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isFormValid(): boolean {
    return (
      this.registrationData.fullName.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registrationData.email) &&
      this.registrationData.phone.trim().length > 5 &&
      this.selectedSessions.length > 0
    );
  }

  async register(): Promise<void> {
    if (!this.isFormValid()) return;

    this.loading = true;
    this.errorMessage = '';

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      this.isRegistered = true;
      this.startRedirectCountdown();
    } catch {
      this.errorMessage = 'Failed to register. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  private getInitials(name: string): string {
    return name
      .replace(/^(Dr|Mr|Ms|Mrs|Prof)\.?\s*/i, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join('');
  }

  private daysUntil(webinarDate: string): number {
    const [wy, wm, wd] = webinarDate.split('-').map(Number);
    const n = new Date();
    const todayUtc = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    const webinarUtc = Date.UTC(wy, wm - 1, wd);
    return Math.round((webinarUtc - todayUtc) / 86_400_000);
  }

  private startRedirectCountdown(): void {
    this.redirectCountdown = 3;
    this.countdownInterval = setInterval(() => {
      this.redirectCountdown--;
      if (this.redirectCountdown <= 0) {
        clearInterval(this.countdownInterval);
        // Refresh or navigate away
        this.isRegistered = false;
        this.registrationData = { fullName: '', email: '', phone: '', organisation: '' };
      }
    }, 1000);
  }
}
