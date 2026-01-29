import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gift-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gift-form.component.html',
  styleUrl: './gift-form.component.scss'
})
export class GiftFormComponent {

  giftForm: FormGroup;
  showReviewModal = false;

  constructor(private fb: FormBuilder) {
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

  confirmAndPay() {
    console.log('Final Data:', this.giftForm.value);
  }
}
