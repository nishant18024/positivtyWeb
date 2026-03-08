import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { IntlTelInputDirective } from '../../directives/intl-tel-input.directive';
import { FormErrorComponent } from '../form-error/form-error.component';
import { PaymentService } from '../../../core/services/api/payment.service';
import { CheckoutItem } from '../../../core/dtos/CheckoutItem';

@Component({
    selector: 'app-education-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IntlTelInputDirective, FormErrorComponent],
    templateUrl: './education-form.component.html',
    styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
    educationForm!: FormGroup;
    currentStep: number = 1;

    constructor(
        private fb: FormBuilder,
        private paymentService: PaymentService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    // --- Form Initialization ---
    private initForm(): void {
        this.educationForm = this.fb.group({
            contactDetails: this.fb.group({
                salutation: ['', Validators.required],
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                jobTitle: ['', Validators.required],
                schoolName: ['', Validators.required],
                schoolPhone: ['', Validators.required],
                schoolEmail: ['', [Validators.required, Validators.email]],
                schoolAddress: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
                country: ['', Validators.required],
                postCode: ['', Validators.required]
            }),
            couponDetails: this.fb.array([this.createCouponGroup()])
        });
    }

    // --- Coupon Details (FormArray) ---
    get couponDetails(): FormArray {
        return this.educationForm.get('couponDetails') as FormArray;
    }

    createCouponGroup(): FormGroup {
        const group = this.fb.group({
            numberOfCoupons: ['', [Validators.required, Validators.min(1)]],
            amountPerCoupon: ['', [Validators.required, Validators.min(1)]],
            sendViaEmail: ['no', Validators.required]
        });
        return group;
    }

    addCoupon(): void {
        this.couponDetails.push(this.createCouponGroup());
    }

    removeCoupon(index: number): void {
        if (this.couponDetails.length > 1) {
            this.couponDetails.removeAt(index);
        }
    }

    getCouponTotal(index: number): number {
        const group = this.couponDetails.at(index);
        const num = group.get('numberOfCoupons')?.value || 0;
        const amount = group.get('amountPerCoupon')?.value || 0;
        return num * amount;
    }

    get grandTotal(): number {
        let total = 0;
        for (let i = 0; i < this.couponDetails.length; i++) {
            total += this.getCouponTotal(i);
        }
        return total;
    }

    // --- Navigation & Submission ---
    nextStep(): void {
        if (this.currentStep === 1) {
            const contactGroup = this.educationForm.get('contactDetails');
            if (contactGroup?.valid) {
                this.currentStep = 2;
                this.scrollToTop();
            } else {
                contactGroup?.markAllAsTouched();
            }
        } else if (this.currentStep === 2) {
            if (this.couponDetails.valid) {
                this.currentStep = 3;
                this.scrollToTop();
            } else {
                this.couponDetails.markAllAsTouched();
            }
        }
    }

    previousStep(): void {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.scrollToTop();
        }
    }

    modifyForm(): void {
        this.currentStep = 2;
        this.scrollToTop();
    }

    private scrollToTop(): void {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                const formSection = document.getElementById('education-booking-form-section');
                if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                }
            }, 50);
        }
    }

    submitForm(): void {
        if (this.educationForm.valid) {
            console.log('Final Form Data:', this.educationForm.value);

            const items: CheckoutItem[] = [
                {
                    Name: 'Positivty Education Booking',
                    Quantity: 1,
                    Price: this.grandTotal.toString(),
                    UserId: 'CURRENT_USER_ID',
                    PsychologistId: '',
                    Product: 'Education'
                }
            ];

            sessionStorage.setItem('educationBookingData', JSON.stringify(this.educationForm.value));
            sessionStorage.setItem('type', 'Education');

            this.paymentService.checkout(items).subscribe({
                next: (res: any) => {
                    const session = res?.session;
                    if (session && session.url) {
                        window.location.href = session.url;
                    } else if (session && session.id) {
                        this.paymentService.redirectToCheckout(session.id);
                    } else {
                        console.error('No session URL or ID returned from checkout API', res);
                    }
                },
                error: (err) => {
                    console.error('Payment checkout failed', err);
                }
            });
        } else {
            this.educationForm.markAllAsTouched();
        }
    }
}
