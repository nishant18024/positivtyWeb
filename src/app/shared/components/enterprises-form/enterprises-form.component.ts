import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { IntlTelInputDirective } from '../../directives/intl-tel-input.directive';
import { FormErrorComponent } from '../form-error/form-error.component';
import { PaymentService } from '../../../core/services/api/payment.service';
import { CheckoutItem } from '../../../core/dtos/CheckoutItem';

@Component({
  selector: 'app-enterprises-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IntlTelInputDirective, FormErrorComponent],
  templateUrl: './enterprises-form.component.html',
  styleUrls: ['./enterprises-form.component.scss']
})
export class EnterprisesFormComponent implements OnInit {
  enterpriseForm!: FormGroup;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.enterpriseForm = this.fb.group({
      contactDetails: this.fb.group({
        salutation: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        jobTitle: ['', Validators.required],
        companyName: ['', Validators.required],
        companyPhone: ['', Validators.required],
        companyEmail: ['', [Validators.required, Validators.email]],
        companyAddress: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        postCode: ['', Validators.required],
      }),
      alternateContactDetails: this.fb.group({
        salutation: [''],
        name: [''],
        jobTitle: [''],
        contactNumber: [''],
        emailId: ['', Validators.email]
      }),
      couponDetails: this.fb.array([])
    });

    // Initialize with one coupon by default
    this.addCoupon();
  }

  get couponDetails(): FormArray {
    return this.enterpriseForm.get('couponDetails') as FormArray;
  }

  createCoupon(): FormGroup {
    const group = this.fb.group({
      numberOfCoupons: ['', [Validators.required, Validators.min(1)]],
      amountPerCoupon: ['', [Validators.required, Validators.min(1)]],
      sendViaEmail: ['no', Validators.required]
    });

    return group;
  }

  addCoupon(): void {
    this.couponDetails.push(this.createCoupon());
  }

  removeCoupon(index: number): void {
    if (this.couponDetails.length > 1) {
      this.couponDetails.removeAt(index);
    }
  }

  getCouponTotal(index: number): number {
    const coupon = this.couponDetails.at(index);
    const num = Number(coupon.get('numberOfCoupons')?.value) || 0;
    const amount = Number(coupon.get('amountPerCoupon')?.value) || 0;
    return num * amount;
  }

  get grandTotal(): number {
    let total = 0;
    for (let i = 0; i < this.couponDetails.length; i++) {
      total += this.getCouponTotal(i);
    }
    return total;
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      // Validate step 1 fields
      const contactGroup = this.enterpriseForm.get('contactDetails');
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

  private scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const formSection = document.getElementById('booking-form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }
      }, 50);
    }
  }

  modifyForm(): void {
    // Go back to step 1 (or 2) as requested. We'll go to Step 2 so they can navigate further back if they wish.
    this.currentStep = 2;
    this.scrollToTop();
  }

  submitForm(): void {
    if (this.enterpriseForm.valid) {
      console.log('Final Form Data:', this.enterpriseForm.value);

      const items: CheckoutItem[] = [
        {
          Name: 'Positivty Enterprise Booking',
          Quantity: 1,
          Price: this.grandTotal.toString(),
          UserId: 'CURRENT_USER_ID', // Replaced correctly from storage/auth if required later
          PsychologistId: '',
          Product: 'Enterprise'
        }
      ];

      sessionStorage.setItem('enterpriseBookingData', JSON.stringify(this.enterpriseForm.value));
      sessionStorage.setItem('type', 'Enterprise');

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
      this.enterpriseForm.markAllAsTouched();
    }
  }
}
