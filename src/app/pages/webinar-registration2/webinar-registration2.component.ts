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

type RegistrationState = 'form' | 'success' | 'already-registered';

@Component({
  selector: 'app-webinar-registration2',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './webinar-registration2.component.html',
  styleUrl: './webinar-registration2.component.scss'
})
export class WebinarRegistration2Component implements OnInit, OnDestroy {
  // Form fields
  fullName = '';
  email = '';
  mobile = '';
  organisation = '';

  // UI state
  registrationState: RegistrationState = 'form';
  isLoading = false;
  showError = false;
  showMoreSessions = false;
  redirectCountdown = 3;
  private countdownInterval?: ReturnType<typeof setInterval>;

  // Validation
  touched = { fullName: false, email: false, mobile: false };

  sessions: Session[] = [
    {
      id: 's1',
      title: 'Building Emotional Resilience at Work',
      speaker: 'Dr. Sarah Chen',
      date: 'Mon, Mar 3',
      time: '10:00 AM GMT',
      tag: 'Workplace',
      selected: false
    },
    {
      id: 's2',
      title: 'Mindfulness for Busy Professionals',
      speaker: 'James Okafor, MBSR',
      date: 'Wed, Mar 5',
      time: '12:00 PM GMT',
      tag: 'Mindfulness',
      selected: false
    },
    {
      id: 's3',
      title: 'Anxiety & Stress: A New Perspective',
      speaker: 'Dr. Priya Nair',
      date: 'Fri, Mar 7',
      time: '2:00 PM GMT',
      tag: 'Mental Health',
      selected: false
    },
    {
      id: 's4',
      title: 'Positive Psychology in Practice',
      speaker: 'Dr. Tom Ellis',
      date: 'Mon, Mar 10',
      time: '11:00 AM GMT',
      tag: 'Psychology',
      selected: false
    },
    {
      id: 's5',
      title: 'Grief, Loss & Moving Forward',
      speaker: 'Amara Diallo, MSW',
      date: 'Wed, Mar 12',
      time: '3:00 PM GMT',
      tag: 'Therapy',
      selected: false
    },
    {
      id: 's6',
      title: 'Sleep Science & Mental Wellbeing',
      speaker: 'Dr. Kai Nakamura',
      date: 'Fri, Mar 14',
      time: '10:00 AM GMT',
      tag: 'Wellness',
      selected: false
    }
  ];

  get visibleSessions(): Session[] {
    return this.showMoreSessions ? this.sessions : this.sessions.slice(0, 3);
  }

  get selectedSessions(): Session[] {
    return this.sessions.filter(s => s.selected);
  }

  get selectedCount(): number {
    return this.selectedSessions.length;
  }

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  get isMobileValid(): boolean {
    return /^\+?[\d\s\-()]{7,15}$/.test(this.mobile);
  }

  get isFormValid(): boolean {
    return this.fullName.trim().length > 1 &&
      this.isEmailValid &&
      this.isMobileValid &&
      this.selectedCount > 0;
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  toggleSession(session: Session): void {
    session.selected = !session.selected;
  }

  deselectAll(): void {
    this.sessions.forEach(s => s.selected = false);
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate already-registered check (10% chance for demo)
      const alreadyRegistered = Math.random() < 0.1;
      this.registrationState = alreadyRegistered ? 'already-registered' : 'success';
      this.startRedirectCountdown();
    } catch {
      this.showError = true;
    } finally {
      this.isLoading = false;
    }
  }

  private startRedirectCountdown(): void {
    this.redirectCountdown = 3;
    this.countdownInterval = setInterval(() => {
      this.redirectCountdown--;
      if (this.redirectCountdown <= 0) {
        clearInterval(this.countdownInterval);
        // In real app: this.router.navigate(['/dashboard']);
        this.registrationState = 'form'; // reset for demo
        this.redirectCountdown = 3;
      }
    }, 1000);
  }
}

