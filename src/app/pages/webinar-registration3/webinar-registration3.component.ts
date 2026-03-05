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
import { WebinarService } from '../../core/services/api/webinar.service';
import { environment } from '../../../environments/environment';
import { COUNTRIES, Country } from '../../core/constants/countries';

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
  redirectCountdown = 10;
  showDetails = false;
  showStickyCta = false;
  showMoreSessions = false;

  // ── Country Dropdown State ────────────────────────────────────────────────
  countryDropdownOpen = false;
  countrySearchQuery = '';
  selectedCountry: Country;
  countries = COUNTRIES;

  @ViewChild('countrySearch') countrySearchRef!: ElementRef<HTMLInputElement>;
  private countdownInterval?: any;

  webinars: any[] = [];
  activeWebinar: any = null;

  constructor(
    private webinarService: WebinarService,
    private router: Router
  ) {
    this.selectedCountry = this.countries[0]; // Default: India
  }

  ngOnInit(): void {
    this.loading = true;
    this.webinarService.getWebinars().subscribe({
      next: (data: any[]) => {
        const now = new Date();
        this.webinars = data
          .map((w) => {
            const startDate = new Date(w.startTime);
            const imgBase = environment.imageBaseUrl;
            return {
              id: w.webinarId,
              title: w.topic,
              description: w.agenda,
              fullDescription: w.agenda,
              date: startDate,
              startTime: this.formatTime(startDate),
              duration: `${w.duration} min`,
              hostName: w.panelistName || 'Positivty Team',
              hostRole: w.panelistDesignation || 'Webinar Host',
              hostInitials: this.getInitials(w.panelistName || 'PW'),
              hostBio: w.panelistDescription,
              image: w.webinarThumbnail ? imgBase + w.webinarThumbnail : 'assets/education.jpg',
              hostImage: w.panelistImage ? imgBase + w.panelistImage : null,
              tags: w.webinarTags ? w.webinarTags.split(',').map((t: string) => t.trim()) : [w.panelistDesignation].filter(Boolean),
              agenda: w.keyTakeAway?.map((o: any) => ({ title: o.title, description: o.description })),
              selected: true,
              isSoon: this.isSoon(startDate)
            };
          })
          .filter(w => w.date > now)
          .sort((a, b) => a.date.getTime() - b.date.getTime());

        if (this.webinars.length > 0) {
          this.activeWebinar = this.webinars[0];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching webinars', err);
        this.errorMessage = 'Failed to load webinars. Please try again.';
        this.loading = false;
      }
    });
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  private isSoon(date: Date): boolean {
    const now = new Date();
    const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
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

  // ── Country dropdown methods ───────────────────────────────────────────────

  get filteredCountries(): Country[] {
    const q = this.countrySearchQuery.toLowerCase().trim();
    if (!q) return this.countries;
    return this.countries.filter(
      c => c.name.toLowerCase().includes(q) || c.code.includes(q)
    );
  }

  toggleCountryDropdown(): void {
    this.countryDropdownOpen = !this.countryDropdownOpen;
    if (this.countryDropdownOpen) {
      this.countrySearchQuery = '';
      setTimeout(() => this.countrySearchRef?.nativeElement?.focus(), 60);
    }
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.countryDropdownOpen = false;
    this.countrySearchQuery = '';
  }

  onCountryFocusOut(e: FocusEvent): void {
    const container = e.currentTarget as HTMLElement;
    if (container.contains(e.relatedTarget as Node)) return;
    this.countryDropdownOpen = false;
  }

  // ── Style Helpers ──────────────────────────────────────────────────────────

  onInputFocus(e: Event): void {
    const el = e.target as HTMLInputElement;
    el.style.borderColor = '#7b5a4a';
    el.style.boxShadow = '0 0 0 3px rgba(123,90,74,0.15)';
  }

  onInputBlur(e: Event): void {
    const el = e.target as HTMLInputElement;
    el.style.borderColor = 'rgba(123,90,74,0.25)';
    el.style.boxShadow = 'none';
  }

  onSearchFocus(e: Event): void {
    const el = e.target as HTMLInputElement;
    el.style.borderColor = '#7b5a4a';
    el.style.boxShadow = '0 0 0 3px rgba(123,90,74,0.12)';
  }

  onSearchBlur(e: Event): void {
    const el = e.target as HTMLInputElement;
    el.style.borderColor = 'rgba(123,90,74,0.25)';
    el.style.boxShadow = 'none';
  }

  onBtnHover(e: Event, isEnter: boolean): void {
    const el = e.target as HTMLButtonElement;
    if (isEnter) {
      el.style.background = '#9a7060';
      el.style.transform = 'translateY(-2px)';
      el.style.boxShadow = '0 10px 28px rgba(123,90,74,0.35)';
    } else {
      el.style.background = '#7b5a4a';
      el.style.transform = 'translateY(0)';
      el.style.boxShadow = 'none';
    }
  }

  onCardHover(e: Event, isEnter: boolean): void {
    const el = e.currentTarget as HTMLElement;
    if (isEnter) {
      el.style.borderColor = '#7b5a4a';
      el.style.boxShadow = '0 4px 20px rgba(123,90,74,0.15)';
    } else {
      el.style.borderColor = 'rgba(123,90,74,0.2)';
      el.style.boxShadow = 'none';
    }
  }

  onCountryHover(e: Event, isEnter: boolean): void {
    const el = e.currentTarget as HTMLElement;
    el.style.background = isEnter ? 'rgba(123,90,74,0.08)' : '';
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

    const names = this.registrationData.fullName.trim().split(/\s+/);
    const firstName = names[0] || '';
    const lastName = names.slice(1).join(' ') || '';
    const selectedIds = this.selectedSessions.map(s => s.id.toString());

    const payload = {
      webinarIds: selectedIds,
      webinarId: selectedIds[0] || '',
      firstName: firstName,
      lastName: lastName,
      email: this.registrationData.email,
      contactNumber: `${this.selectedCountry.code} ${this.registrationData.phone}`,
      organizationName: this.registrationData.organisation,
      referrer: 'WebinarRegistration3',
      createdBy: 'User'
    };

    this.webinarService.registerWebinar(payload).subscribe({
      next: () => {
        this.isRegistered = true;
        this.startRedirectCountdown();
        this.loading = false;
      },
      error: (err) => {
        console.error('Registration failed', err);
        this.errorMessage = 'Failed to register. Please try again.';
        this.loading = false;
      }
    });
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


  localTodayStr(): string {
    const n = new Date();
    const yyyy = n.getFullYear();
    const mm = String(n.getMonth() + 1).padStart(2, '0');
    const dd = String(n.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  private startRedirectCountdown(): void {
    this.redirectCountdown = 10;
    this.countdownInterval = setInterval(() => {
      this.redirectCountdown--;
      if (this.redirectCountdown <= 0) {
        clearInterval(this.countdownInterval);
        // Redirect to positivty.com
        window.location.href = 'https://positivty.com';
      }
    }, 1000);
  }
}
