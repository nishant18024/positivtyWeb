import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../core/services/api/user.service';
import { EnterprisesService } from '../../../core/services/api/enterprises.service';
import { EducationService } from '../../../core/services/api/education.service';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-success.component.html'
})
export class PaymentSuccessComponent implements OnInit {
  status: 'processing' | 'success' | 'error' = 'processing';
  errorMessage: string = '';

  // Receipt data bindings for UI compatibility
  userDetails: any = {};
  psychologistDetails: any = { psychologist: {}, profile: {}, professionalQualifications: [] };
  durationMap: any = {};
  bookingDetails: any = {};
  bookingDate: Date = new Date();
  bookingId: string = 'BK-12345';
  transactionId: string = 'TXN-98765';
  finalAmount: number = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private enterprisesService: EnterprisesService,
    private educationService: EducationService
  ) { }

  ngOnInit(): void {
    this.processPaymentSuccess();
  }

  processPaymentSuccess() {
    const type = sessionStorage.getItem('type');
    const giftSessionDataStr = sessionStorage.getItem('giftSessionData');

    if (type === 'Gift' && giftSessionDataStr) {
      try {
        const giftSessionData = JSON.parse(giftSessionDataStr);

        this.userService.addVoucher(giftSessionData).subscribe({
          next: () => {
            this.status = 'success';
            sessionStorage.removeItem('giftSessionData');
            sessionStorage.removeItem('type');
          },
          error: (err: any) => {
            console.error('Error adding voucher after successful payment', err);
            this.status = 'error';
            this.errorMessage = 'Payment was successful, but we encountered an error fulfilling your gift. Please contact support.';
          }
        });
      } catch (e) {
        console.error('Failed to parse gift session data', e);
        this.status = 'error';
        this.errorMessage = 'Invalid session data. Please contact support.';
      }
    } else if (type === 'Enterprise' && sessionStorage.getItem('enterpriseBookingData')) {
      try {
        const enterpriseDataStr = sessionStorage.getItem('enterpriseBookingData')!;
        const enterpriseData = JSON.parse(enterpriseDataStr);

        // Map form data to Enterprises model structure if necessary, or pass directly
        this.enterprisesService.addEnterprise(enterpriseData).subscribe({
          next: (res: any) => {
            // If the backend requires a secondary call for vouchers, you can chain it here.
            // For example:
            // if (enterpriseData.couponDetails && enterpriseData.couponDetails.length > 0) {
            //   this.enterprisesService.addVoucherDetails(enterpriseData.couponDetails).subscribe(...)
            // }

            this.status = 'success';
            sessionStorage.removeItem('enterpriseBookingData');
            sessionStorage.removeItem('type');
          },
          error: (err: any) => {
            console.error('Error adding enterprise booking after successful payment', err);
            this.status = 'error';
            this.errorMessage = 'Payment was successful, but we encountered an error setting up your enterprise account. Please contact support.';
          }
        });

      } catch (e) {
        console.error('Failed to parse enterprise session data', e);
        this.status = 'error';
        this.errorMessage = 'Invalid enterprise session data. Please contact support.';
      }
    } else if (type === 'Education' && sessionStorage.getItem('educationBookingData')) {
      try {
        const educationDataStr = sessionStorage.getItem('educationBookingData')!;
        const educationData = JSON.parse(educationDataStr);

        this.educationService.addEducation(educationData).subscribe({
          next: (res: any) => {
            this.status = 'success';
            sessionStorage.removeItem('educationBookingData');
            sessionStorage.removeItem('type');
          },
          error: (err: any) => {
            console.error('Error adding education booking after successful payment', err);
            this.status = 'error';
            this.errorMessage = 'Payment was successful, but we encountered an error setting up your education dashboard tracking. Please contact support.';
          }
        });

      } catch (e) {
        console.error('Failed to parse education session data', e);
        this.status = 'error';
        this.errorMessage = 'Invalid education session data. Please contact support.';
      }
    } else {
      // If there's no data, we either already processed it or accessed the page directly
      this.status = 'error';
      this.errorMessage = 'No pending transaction found. If you completed a payment, it may have already been processed.';
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
