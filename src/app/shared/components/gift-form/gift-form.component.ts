import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormErrorService } from '../../services/form-error.service';
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IntlTelInputDirective } from '../../directives/intl-tel-input.directive';
import { PaymentService } from '../../../core/services/api/payment.service';
import { UserService } from '../../../core/services/api/user.service';
import { AuthService } from '../../../core/services/api/auth.service';
import { CheckoutItem } from '../../../core/dtos/CheckoutItem';

@Component({
  selector: 'app-gift-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IntlTelInputDirective, FormErrorComponent],
  templateUrl: './gift-form.component.html',
  styleUrl: './gift-form.component.scss'
})
export class GiftFormComponent implements OnInit {

  giftForm: FormGroup;
  showReviewModal = false;

  @ViewChild(IntlTelInputDirective) intlTelInputDirective!: IntlTelInputDirective;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private userService: UserService,
    private authService: AuthService,
    private formErrorService: FormErrorService
  ) {
    this.giftForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      relationship: ['', Validators.required],
      otherRelationship: [''],
      showIdentity: ['no'],
      senderName: [''],
      senderEmail: [''],
      message: [''],
      amount: ['', Validators.required],
    });
  }

  toggleIdentity() {
    const current = this.giftForm.value.showIdentity;
    this.giftForm.patchValue({
      showIdentity: current === 'yes' ? 'no' : 'yes'
    });
  }

  openReviewModal() {
    if (this.giftForm.invalid) {
      this.giftForm.markAllAsTouched();
      return;
    }
    this.showReviewModal = true;
  }

  closeReviewModal() {
    this.showReviewModal = false;
  }

  ngOnInit(): void {
  }

  confirmAndPay() {
    if (this.giftForm.invalid) return;

    // Build the data object (similar to GiftSession structure in reference)
    const formData = this.giftForm.value;

    // Get full phone configuration if directive is available
    let fullPhoneWithCode = formData.phone;
    let selectedCountryCode = '';

    if (this.intlTelInputDirective) {
      const iti = this.intlTelInputDirective.getInstance();
      if (iti) {
        selectedCountryCode = iti.getSelectedCountryData().dialCode || '';
        fullPhoneWithCode = `+${selectedCountryCode}${formData.phone}`;
      }
    }

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailId: formData.email,
      contactNumber: formData.phone,
      relation: formData.relationship === 'Others' ? `Others - ${formData.otherRelationship}` : formData.relationship,
      senderName: formData.showIdentity === 'yes' ? formData.senderName : 'Anonymous',
      senderEmail: formData.showIdentity === 'yes' ? formData.senderEmail : '',
      message: formData.message,
      amount: formData.amount,
      anonymous: formData.showIdentity === 'no',
      receiverPhoneWithCode: fullPhoneWithCode
    };

    // Note: You may want to call this.userService.addVoucher(payload).subscribe(...) before or after proceeding to Stripe.

    // Proceed to Stripe checkout
    const items: CheckoutItem[] = [
      {
        Name: 'Positivty Gift A Session',
        Quantity: 1,
        Price: formData.amount.toString(),
        UserId: 'CURRENT_USER_ID', // Replace with real UserId if needed
        PsychologistId: '',       // Left empty or assigned based on system logic
        Product: 'Gift'
      }
    ];

    sessionStorage.setItem('giftSessionData', JSON.stringify(payload));
    sessionStorage.setItem('type', 'Gift');

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
  }
}
