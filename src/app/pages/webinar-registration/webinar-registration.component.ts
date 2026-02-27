import {
    Component, OnInit, OnDestroy, AfterViewInit,
    ViewChild, ElementRef, inject, HostListener, PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
    ReactiveFormsModule, FormBuilder, Validators,
    AbstractControl, ValidationErrors,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

// ── Models ────────────────────────────────────────────────────────────────────

export interface Webinar {
    id: number;
    title: string;
    description: string;
    webinar_date: string;
    time: string;
    status: 'Active' | 'Inactive';
}

export interface RegistrationPayload {
    fullName: string;
    email: string;
    mobile: string;
    organization: string;
}

export interface RegistrationResponse {
    status: 'success' | 'already_registered' | 'error';
    registered_count?: number;
    redirect_url?: string;
}

export interface SelectedCountry {
    name: string;
    code: string;
    flag: string;
}

export type FormState = 'idle' | 'loading' | 'success' | 'already_registered' | 'error';

// ── Validators ────────────────────────────────────────────────────────────────

function phoneValidator(control: AbstractControl): ValidationErrors | null {
    const val = (control.value ?? '').trim();
    return /^\+?[\d\s\-]{8,15}$/.test(val) ? null : { invalidPhone: true };
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
    selector: 'app-webinar-registration',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
    templateUrl: './webinar-registration.component.html',
    styleUrls: ['./webinar-registration.component.scss'],
    styles: [`
    @keyframes dropdownIn {
      from { opacity: 0; transform: translateY(-6px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0)    scale(1);    }
    }
    @keyframes redirectProgress {
      from { width: 0%; }
      to   { width: 100%; }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0);    }
    }

    /* Thin scrollbar for country list */
    :host ::ng-deep .scrollbar-thin {
      scrollbar-width: thin;
      scrollbar-color: rgba(123,90,74,0.2) transparent;
    }
    :host ::ng-deep .scrollbar-thin::-webkit-scrollbar { width: 4px; }
    :host ::ng-deep .scrollbar-thin::-webkit-scrollbar-thumb {
      background: rgba(123,90,74,0.2);
      border-radius: 4px;
    }
  `],
})
export class WebinarRegistrationComponent implements OnInit, AfterViewInit, OnDestroy {

    private fb = inject(FormBuilder);
    private platformId = inject(PLATFORM_ID);

    // ── State ──────────────────────────────────────────────────────────────────
    formState: FormState = 'idle';
    loading = true;
    showStickyCta = false;
    allWebinars: Webinar[] = [];

    // ── Country dropdown state ─────────────────────────────────────────────────
    countryDropdownOpen = false;
    countrySearchQuery = '';
    selectedCountry: SelectedCountry;

    // ── Static data ────────────────────────────────────────────────────────────
    curriculum = [
        { icon: '🧘', text: 'Practical tools for stress management' },
        { icon: '💪', text: 'Emotional resilience techniques' },
        { icon: '🏢', text: 'Workplace mental health strategies' },
        { icon: '🎙', text: 'Live Q&A with certified experts' },
    ];

    stats = [
        { num: '12k+', label: 'Participants' },
        { num: '48+', label: 'Webinars' },
        { num: '200+', label: 'Organizations' },
    ];

    countries: SelectedCountry[] = [
        { name: 'India', code: '+91', flag: '🇮🇳' },
        { name: 'United States', code: '+1', flag: '🇺🇸' },
        { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
        { name: 'Australia', code: '+61', flag: '🇦🇺' },
        { name: 'Canada', code: '+1', flag: '🇨🇦' },
        { name: 'Singapore', code: '+65', flag: '🇸🇬' },
        { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
        { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
        { name: 'Germany', code: '+49', flag: '🇩🇪' },
        { name: 'France', code: '+33', flag: '🇫🇷' },
        { name: 'Italy', code: '+39', flag: '🇮🇹' },
        { name: 'Spain', code: '+34', flag: '🇪🇸' },
        { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
        { name: 'Brazil', code: '+55', flag: '🇧🇷' },
        { name: 'Mexico', code: '+52', flag: '🇲🇽' },
        { name: 'Japan', code: '+81', flag: '🇯🇵' },
        { name: 'China', code: '+86', flag: '🇨🇳' },
        { name: 'South Korea', code: '+82', flag: '🇰🇷' },
        { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
        { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
        { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
        { name: 'Nepal', code: '+977', flag: '🇳🇵' },
        { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
        { name: 'Philippines', code: '+63', flag: '🇵🇭' },
        { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
        { name: 'Thailand', code: '+66', flag: '🇹🇭' },
        { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
        { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
        { name: 'South Africa', code: '+27', flag: '🇿🇦' },
        { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
        { name: 'Kenya', code: '+254', flag: '🇰🇪' },
        { name: 'Egypt', code: '+20', flag: '🇪🇬' },
        { name: 'Turkey', code: '+90', flag: '🇹🇷' },
        { name: 'Russia', code: '+7', flag: '🇷🇺' },
        { name: 'Israel', code: '+972', flag: '🇮🇱' },
        { name: 'Portugal', code: '+351', flag: '🇵🇹' },
        { name: 'Sweden', code: '+46', flag: '🇸🇪' },
        { name: 'Norway', code: '+47', flag: '🇳🇴' },
        { name: 'Denmark', code: '+45', flag: '🇩🇰' },
        { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
        { name: 'Belgium', code: '+32', flag: '🇧🇪' },
        { name: 'Poland', code: '+48', flag: '🇵🇱' },
        { name: 'Argentina', code: '+54', flag: '🇦🇷' },
        { name: 'Colombia', code: '+57', flag: '🇨🇴' },
    ];

    // ── Reactive form ──────────────────────────────────────────────────────────
    form = this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]],
        organization: [''],
    });

    // ── ViewChildren ──────────────────────────────────────────────────────────
    @ViewChild('registerSection') registerRef!: ElementRef<HTMLElement>;
    @ViewChild('countrySearch') countrySearchRef!: ElementRef<HTMLInputElement>;

    private observer?: IntersectionObserver;

    constructor() {
        this.selectedCountry = this.countries[0]; // Default: India
    }

    // ── Lifecycle ──────────────────────────────────────────────────────────────

    ngOnInit(): void {
        this.loadWebinars();
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        if (this.registerRef?.nativeElement) {
            this.observer = new IntersectionObserver(
                (entries) => { this.showStickyCta = !entries[0].isIntersecting; },
                { threshold: 0.1 },
            );
            this.observer.observe(this.registerRef.nativeElement);
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    // ── Close dropdown on outside click ───────────────────────────────────────
    @HostListener('document:keydown.escape')
    onEscape(): void {
        this.countryDropdownOpen = false;
    }

    // ── Country dropdown methods ───────────────────────────────────────────────

    get filteredCountries(): SelectedCountry[] {
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

    selectCountry(country: SelectedCountry): void {
        this.selectedCountry = country;
        this.countryDropdownOpen = false;
        this.countrySearchQuery = '';
    }

    // Fires when focus leaves the entire dropdown container (button + panel).
    // relatedTarget is where focus is moving to — if it's still inside the
    // container we stay open; only close when truly leaving.
    onCountryFocusOut(e: FocusEvent): void {
        const container = e.currentTarget as HTMLElement;
        if (container.contains(e.relatedTarget as Node)) return;
        this.countryDropdownOpen = false;
    }

    // ── Inline hover helpers (replacing Tailwind hover: which can't use inline styles) ──

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

    // ── Computed ───────────────────────────────────────────────────────────────

    get upcomingWebinars(): Webinar[] {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.allWebinars.filter(
            w => w.status === 'Active' && new Date(w.webinar_date) >= today
        );
    }

    // ── Template helpers ───────────────────────────────────────────────────────

    getDay(dateStr: string): number {
        return new Date(dateStr).getDate();
    }

    getMonth(dateStr: string): string {
        return new Date(dateStr).toLocaleString('default', { month: 'short' }).toUpperCase();
    }

    isInvalid(field: string): boolean {
        const ctrl = this.form.get(field);
        return !!(ctrl?.invalid && ctrl.touched);
    }

    scrollToRegister(e: Event): void {
        e.preventDefault();
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    }

    // ── Data loading ───────────────────────────────────────────────────────────

    private loadWebinars(): void {
        const DEMO: Webinar[] = [
            {
                id: 1,
                title: 'Navigating Anxiety in Uncertain Times',
                description: 'Evidence-based strategies to manage day-to-day anxiety and build calmness.',
                webinar_date: '2026-02-27',
                time: '6:00 PM IST',
                status: 'Active',
            },
            {
                id: 2,
                title: 'Building Resilience at Work',
                description: 'Learn how high-performers stay grounded under pressure and bounce back faster.',
                webinar_date: '2026-03-05',
                time: '6:30 PM IST',
                status: 'Active',
            },
            {
                id: 3,
                title: 'Sleep, Stress & Recovery',
                description: 'Understand the science of sleep and practical rituals for deeper rest.',
                webinar_date: '2026-03-12',
                time: '7:00 PM IST',
                status: 'Active',
            },
        ];

        of(DEMO).pipe(delay(300)).subscribe({
            next: (data) => { this.allWebinars = data; this.loading = false; },
            error: () => (this.loading = false),
        });
    }

    // ── Form submission ────────────────────────────────────────────────────────

    onSubmit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.formState = 'loading';

        const payload: RegistrationPayload = {
            fullName: this.form.value.fullName!.trim(),
            email: this.form.value.email!.trim(),
            mobile: `${this.selectedCountry.code} ${this.form.value.mobile!.trim()}`,
            organization: (this.form.value.organization ?? '').trim(),
        };

        const mock: RegistrationResponse = {
            status: 'success',
            registered_count: 3,
            redirect_url: '/communities/webinars',
        };

        of(mock).pipe(delay(1400)).subscribe({
            next: (res) => this.handleResponse(res),
            error: () => (this.formState = 'error'),
        });
    }

    private handleResponse(res: RegistrationResponse): void {
        if (res.status === 'already_registered') {
            this.formState = 'already_registered';
            this.scheduleRedirect(res.redirect_url);
        } else if (res.status === 'success') {
            this.formState = 'success';
            this.scheduleRedirect(res.redirect_url);
        } else {
            this.formState = 'error';
        }
    }

    private scheduleRedirect(url?: string): void {
        setTimeout(() => { window.location.href = url ?? '/communities/webinars'; }, 3000);
    }
}