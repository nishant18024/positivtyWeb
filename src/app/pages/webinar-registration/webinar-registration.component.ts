import {
    Component, OnInit, OnDestroy, AfterViewInit,
    ViewChild, ElementRef, inject, signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule, FormBuilder, Validators,
    AbstractControl, ValidationErrors,
} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Select } from 'primeng/select';

// ── Models ────────────────────────────────────────────────────────────────────

export interface Webinar {
    id: number;
    title: string;
    description: string;
    webinar_date: string; // ISO e.g. "2026-02-27"
    time: string;         // Display e.g. "6:00 PM IST"
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
    imports: [CommonModule, ReactiveFormsModule, Select],
    templateUrl: './webinar-registration.component.html',
    styles: [`
        :host ::ng-deep {
            .country-selector {
                .p-select {
                    border-radius: 12px 0 0 12px;
                    border: 1px solid rgba(123, 90, 74, 0.25);
                    border-right: none;
                    background: white;
                    width: 90px;
                    transition: all 0.2s;
                    &:not(.p-disabled).p-focus {
                        box-shadow: none;
                        border-color: #7b5a4a;
                        z-index: 10;
                    }
                }
                .p-select-label {
                    padding: 0 0.5rem 0 1rem;
                    font-size: 15px;
                    color: #7b5a4a;
                    display: flex;
                    align-items: center;
                    height: 54px;
                    background: transparent;
                }
                .p-select-dropdown {
                    width: 1.5rem;
                    color: #7b5a4a;
                }
            }
        }

        /* Dark mode overrides for PrimeNG components */
        :host-context(.dark) ::ng-deep {
            .country-selector {
                .p-select {
                    background: #1f2937; /* gray-800 */
                    border-color: rgba(255, 255, 255, 0.1);
                    &:not(.p-disabled).p-focus {
                        border-color: #c4a090;
                    }
                }
                .p-select-label {
                    color: #c4a090;
                }
                .p-select-dropdown {
                    color: #c4a090;
                }
            }
        }

        /* Essential dark mode styles for dropdown overlays */
        ::ng-deep .p-select-overlay.p-dark {
            background: #111827 !important; /* gray-900 */
            border-color: rgba(255, 255, 255, 0.1) !important;
            
            .p-select-list-container {
                .p-select-option {
                    color: #e5e7eb !important; /* gray-200 */
                    &:hover {
                        background: #374151 !important; /* gray-700 */
                    }
                    &.p-highlight {
                        background: rgba(123, 90, 74, 0.2) !important;
                        color: #c4a090 !important;
                    }
                }
            }
        }
    `]
})
export class WebinarRegistrationComponent implements OnInit, AfterViewInit, OnDestroy {

    private fb = inject(FormBuilder);

    // ── State ──────────────────────────────────────────────────────────────────
    formState: FormState = 'idle';
    loading = true;
    showStickyCta = false;
    allWebinars: Webinar[] = [];

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
        { name: 'USA', code: '+1', flag: '🇺🇸' },
        { name: 'UK', code: '+44', flag: '🇬🇧' },
        { name: 'Australia', code: '+61', flag: '🇦🇺' },
        { name: 'Canada', code: '+1', flag: '🇨🇦' },
        { name: 'Germany', code: '+49', flag: '🇩🇪' },
        { name: 'France', code: '+33', flag: '🇫🇷' },
        { name: 'UAE', code: '+971', flag: '🇦🇪' },
        { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    ];

    // ── Reactive form ──────────────────────────────────────────────────────────
    form = this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        countryCode: [this.countries[0], [Validators.required]],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{7,12}$/)]],
        organization: [''],
    });

    // ── IntersectionObserver for sticky CTA ───────────────────────────────────
    @ViewChild('registerSection') registerRef!: ElementRef<HTMLElement>;
    private observer?: IntersectionObserver;

    // ── Lifecycle ──────────────────────────────────────────────────────────────

    ngOnInit(): void {
        this.loadWebinars();
    }

    ngAfterViewInit(): void {
        if (this.registerRef?.nativeElement) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    this.showStickyCta = !entries[0].isIntersecting;
                },
                { threshold: 0.1 },
            );
            this.observer.observe(this.registerRef.nativeElement);
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    // ── Computed ───────────────────────────────────────────────────────────────

    get upcomingWebinars(): Webinar[] {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.allWebinars.filter(
            (w) => w.status === 'Active' && new Date(w.webinar_date) >= today,
        );
    }

    // ── Template helpers ───────────────────────────────────────────────────────

    getDay(dateStr: string): number {
        return new Date(dateStr).getDate();
    }

    getMonth(dateStr: string): string {
        return new Date(dateStr)
            .toLocaleString('default', { month: 'short' })
            .toUpperCase();
    }

    get countryCodeControl(): AbstractControl | null {
        return this.form.get('countryCode');
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
        // Demo data — replace with:
        // this.http.get<Webinar[]>('/api/webinars').subscribe(...)
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
            next: (data) => {
                this.allWebinars = data;
                this.loading = false;
            },
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
            mobile: `${(this.form.value.countryCode as any).code} ${this.form.value.mobile!.trim()}`,
            organization: (this.form.value.organization ?? '').trim(),
        };

        // Real API call — uncomment and remove mock below:
        // this.http
        //   .post<RegistrationResponse>('/api/webinar/register-bulk', payload)
        //   .subscribe({ next: this.handleResponse.bind(this), error: () => (this.formState = 'error') });

        // ── Mock response ──
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
        setTimeout(() => {
            window.location.href = url ?? '/communities/webinars';
        }, 3000);
    }
}