import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Session {
  id: string;
  title: string;
  speaker: string;
  date: string;
  time: string;
  tag: string;
  selected: boolean;
}

interface WebinarHost {
  name: string;
  role: string;
}

interface Webinar {
  id: number;
  title: string;
  description: string;
  webinar_date: string;
  time: string;
  tags?: string[];
  host?: WebinarHost;
  detailUrl?: string;
  status: string;
}

type RegistrationState = 'form' | 'success' | 'already-registered';

const ALL_WEBINARS: Webinar[] = [
  {
    id: 1,
    title: 'Navigating Anxiety in Uncertain Times',
    description: "Uncertainty is a constant in modern life, but anxiety doesn't have to be. In this session, our clinical psychologist walks through evidence-based cognitive techniques — from grounding exercises to thought-reframing — to help you build day-to-day calmness even when the world feels unpredictable.",
    webinar_date: '2026-02-28',
    time: '6:00 PM IST',
    tags: ['Anxiety', 'CBT', 'Mindfulness'],
    host: { name: 'Dr. Priya Mehta', role: 'Clinical Psychologist' },
    detailUrl: '/communities/webinars/1',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Building Resilience at Work',
    description: 'Burnout is a growing challenge across industries. This session explores how high-performers build psychological resilience — the ability to absorb pressure and bounce back faster — through evidence-backed strategies you can apply from Monday morning.',
    webinar_date: '2026-03-05',
    time: '6:30 PM IST',
    tags: ['Resilience', 'Workplace', 'Burnout'],
    host: { name: 'Arun Sharma', role: 'Organisational Psychologist' },
    detailUrl: '/communities/webinars/2',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Sleep, Stress & Recovery',
    description: 'Poor sleep and high stress form a vicious cycle that undermines physical and mental health. This session unpacks the science of sleep architecture, cortisol regulation, and practical rituals — from wind-down routines to environment design — for deeper, more restorative rest.',
    webinar_date: '2026-03-12',
    time: '7:00 PM IST',
    tags: ['Sleep', 'Stress', 'Recovery'],
    host: { name: 'Dr. Sneha Iyer', role: 'Sleep & Wellness Specialist' },
    detailUrl: '/communities/webinars/3',
    status: 'Active',
  },
  {
    id: 4,
    title: 'Mindful Communication',
    description: 'Most conflicts at work and home stem not from what we say, but how and when we say it. Learn non-violent communication techniques, active listening frameworks, and empathy-building practices that transform relationships.',
    webinar_date: '2026-03-19',
    time: '6:00 PM IST',
    tags: ['Communication', 'Relationships', 'Empathy'],
    host: { name: 'Kavita Nair', role: 'Relationship Therapist' },
    detailUrl: '/communities/webinars/4',
    status: 'Active',
  },
  {
    id: 5,
    title: 'Burnout Prevention & Recovery',
    description: 'Learn to identify the early-stage warning signals of burnout before they become debilitating. This session covers sustainable work patterns, energy management, and recovery strategies tailored for high-demand environments.',
    webinar_date: '2026-03-26',
    time: '6:30 PM IST',
    tags: ['Burnout', 'Energy', 'Wellbeing'],
    host: { name: 'Rohan Gupta', role: 'Executive Wellness Coach' },
    detailUrl: '/communities/webinars/5',
    status: 'Active',
  },
  {
    id: 6,
    title: 'Parenting & Mental Health',
    description: 'Parenting is one of the most rewarding — and demanding — roles a person can take on. This session offers practical frameworks for managing parental stress, modelling emotional intelligence for children, and building support structures that work.',
    webinar_date: '2026-04-02',
    time: '7:00 PM IST',
    tags: ['Parenting', 'Family', 'Emotional Health'],
    host: { name: 'Dr. Anita Rao', role: 'Child & Family Therapist' },
    detailUrl: '/communities/webinars/6',
    status: 'Active',
  },
  {
    id: 7,
    title: 'Grief, Loss & Moving Forward',
    description: 'Grief extends beyond bereavement — it encompasses job loss, relationship endings, and major life transitions. This compassionate session provides a framework for processing grief at your own pace and finding pathways toward healing.',
    webinar_date: '2026-04-09',
    time: '6:00 PM IST',
    tags: ['Grief', 'Healing', 'Transitions'],
    host: { name: 'Meera Pillai', role: 'Grief Counsellor' },
    detailUrl: '/communities/webinars/7',
    status: 'Active',
  },
  {
    id: 8,
    title: 'Digital Wellbeing & Screen Fatigue',
    description: 'Constant connectivity is rewiring our attention and depleting our cognitive reserves. Discover research-backed strategies to reduce screen fatigue, set healthy digital boundaries, and reclaim focused, restorative time.',
    webinar_date: '2026-04-16',
    time: '6:30 PM IST',
    tags: ['Digital Wellbeing', 'Focus', 'Boundaries'],
    host: { name: 'Siddharth Roy', role: 'Digital Wellbeing Researcher' },
    detailUrl: '/communities/webinars/8',
    status: 'Active',
  },
  {
    id: 9,
    title: 'Financial Stress & Mental Health',
    description: 'Money anxiety is one of the most pervasive yet under-discussed sources of stress. This session explores the psychological underpinnings of financial anxiety and offers practical approaches to break the stress-spending cycle.',
    webinar_date: '2026-04-23',
    time: '7:00 PM IST',
    tags: ['Financial Wellbeing', 'Anxiety', 'Habits'],
    host: { name: 'Pooja Malhotra', role: 'Financial Wellness Therapist' },
    detailUrl: '/communities/webinars/9',
    status: 'Active',
  },
  {
    id: 10,
    title: 'Self-Compassion as a Superpower',
    description: "Self-criticism is not a motivator — it's a drain. Research consistently shows that self-compassion improves performance, resilience, and emotional wellbeing. Learn practical exercises to cultivate a kinder, more empowering inner voice.",
    webinar_date: '2026-04-30',
    time: '6:00 PM IST',
    tags: ['Self-Compassion', 'Inner Critic', 'Resilience'],
    host: { name: 'Dr. Lakshmi Bose', role: 'Positive Psychology Practitioner' },
    detailUrl: '/communities/webinars/10',
    status: 'Active',
  },
];

/** Returns a zero-padded YYYY-MM-DD string for today in LOCAL time.
 *  Never relies on toLocaleDateString() locale availability. */
function localTodayStr(): string {
  const n = new Date();
  const yyyy = n.getFullYear();
  const mm   = String(n.getMonth() + 1).padStart(2, '0');
  const dd   = String(n.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

@Component({
  selector: 'app-webinar-registration2',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './webinar-registration2.component.html',
  styleUrl: './webinar-registration2.component.scss',
})
export class WebinarRegistration2Component implements OnInit, OnDestroy {
  fullName = '';
  email = '';
  mobile = '';
  organisation = '';

  registrationState: RegistrationState = 'form';
  isLoading = false;
  showError = false;
  showMoreSessions = false;
  redirectCountdown = 3;
  private countdownInterval?: ReturnType<typeof setInterval>;

  touched = { fullName: false, email: false, mobile: false };

  sessions: Session[] = [];
  nextWebinar: Webinar | null = null;

  // ── Computed: "Coming Up Next" card ────────────────────────────────────────

  get daysLabel(): string {
    if (!this.nextWebinar) return '';
    const diff = this.daysUntil(this.nextWebinar.webinar_date);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    if (diff > 0) return `In ${diff} day${diff !== 1 ? 's' : ''}`;
    return 'Upcoming';
  }

  get dateStr(): string {
    if (!this.nextWebinar) return '';
    // Parse year/month/day manually to avoid UTC-shift from new Date('YYYY-MM-DD')
    const [y, m, d] = this.nextWebinar.webinar_date.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  get initials(): string {
    const name = this.nextWebinar?.host?.name ?? '';
    return name
      .replace(/^(Dr|Mr|Ms|Mrs|Prof)\.?\s*/i, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join('');
  }

  // ── Lifecycle ───────────────────────────────────────────────────────────────

  ngOnInit(): void {
    this.sessions = ALL_WEBINARS
      .filter((w) => w.status === 'Active')
      .map((w) => ({
        id: String(w.id),
        title: w.title,
        speaker: w.host?.name ?? 'TBC',
        date: this.formatShortDate(w.webinar_date),
        time: w.time,
        tag: w.tags?.[0] ?? 'General',
        selected: true,
      }));

    this.nextWebinar = this.findNextWebinar();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  // ── Session list ────────────────────────────────────────────────────────────

  get visibleSessions(): Session[] {
    return this.showMoreSessions ? this.sessions : this.sessions.slice(0, 3);
  }

  get selectedSessions(): Session[] {
    return this.sessions.filter((s) => s.selected);
  }

  get selectedCount(): number {
    return this.selectedSessions.length;
  }

  // ── Validation ──────────────────────────────────────────────────────────────

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  get isMobileValid(): boolean {
    return /^\+?[\d\s\-()]{7,15}$/.test(this.mobile);
  }

  get isFormValid(): boolean {
    return (
      this.fullName.trim().length > 1 &&
      this.isEmailValid &&
      this.isMobileValid &&
      this.selectedCount > 0
    );
  }

  // ── Actions ─────────────────────────────────────────────────────────────────

  toggleSession(session: Session): void {
    session.selected = !session.selected;
  }

  deselectAll(): void {
    this.sessions.forEach((s) => (s.selected = false));
  }

  touch(field: keyof typeof this.touched): void {
    this.touched[field] = true;
  }

  async onSubmit(): Promise<void> {
    this.touched = { fullName: true, email: true, mobile: true };
    if (!this.isFormValid) return;

    this.isLoading = true;
    this.showError = false;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const alreadyRegistered = Math.random() < 0.1;
      this.registrationState = alreadyRegistered ? 'already-registered' : 'success';
      this.startRedirectCountdown();
    } catch {
      this.showError = true;
    } finally {
      this.isLoading = false;
    }
  }

  // ── Private helpers ─────────────────────────────────────────────────────────

  private findNextWebinar(): Webinar | null {
    const todayStr = localTodayStr(); // e.g. "2026-02-28" — no locale dependency
    return (
      ALL_WEBINARS
        .filter((w) => w.status === 'Active' && w.webinar_date >= todayStr)
        .sort((a, b) => a.webinar_date.localeCompare(b.webinar_date))[0] ?? null
    );
  }

  private daysUntil(webinarDate: string): number {
    const [wy, wm, wd] = webinarDate.split('-').map(Number);
    const n = new Date();
    const todayUtc   = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    const webinarUtc = Date.UTC(wy, wm - 1, wd);
    return Math.round((webinarUtc - todayUtc) / 86_400_000);
  }

  private formatShortDate(dateStr: string): string {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  }

  private startRedirectCountdown(): void {
    this.redirectCountdown = 3;
    this.countdownInterval = setInterval(() => {
      this.redirectCountdown--;
      if (this.redirectCountdown <= 0) {
        clearInterval(this.countdownInterval);
        this.registrationState = 'form';
        this.redirectCountdown = 3;
      }
    }, 1000);
  }
}