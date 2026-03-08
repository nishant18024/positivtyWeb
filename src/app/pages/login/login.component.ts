import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormErrorService } from '../../shared/services/form-error.service';
import { FormErrorComponent } from '../../shared/components/form-error/form-error.component';
import { AuthService } from '../../core/services/api/auth.service';
import { AlertService } from '../../core/services/alert/alert.service';
import { UserService } from '../../core/services/api/user.service';
import { SessionService } from '../../core/services/api/session.service';
import { environment } from '../../../environments/environment';
import intlTelInput from 'intl-tel-input';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, FormErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit, AfterViewChecked {
  currentStep: 'emailPhone' | 'otp' | 'completeProfile' | 'resetPassword' | 'setPassword' = 'emailPhone';
  loginMode: 'otp' | 'password' = 'otp';
  loginForm!: FormGroup;
  otpForm!: FormGroup;
  setPasswordForm!: FormGroup;
  profileForm!: FormGroup;
  passwordResetForm!: FormGroup;
  otpArray = new Array(4);
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  showNewPassword: boolean = false;
  otpInputs: any[] = [];
  isProfileCompleted: boolean = false;
  isPasswordCompleted: boolean = false;
  user: any;
  isPhoneInput = false;
  canResend: boolean = false;
  countdown: number = 30;
  googleReady = false;
  returnUrl: string = '/';
  loading: boolean = false;
  errorMessage: string = '';

  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private phoneRegex = /^\d+$/;
  private itiInstance: any;
  private countdownInterval: any;
  private googleInitialized = false;

  @ViewChildren('otpInput') otpInputsFields!: QueryList<ElementRef>;
  @ViewChild('emailPhoneInput') emailPhoneInputRef!: ElementRef;
  @ViewChild('googleSignInButton') googleSignInButtonRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private ngZone: NgZone,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private formErrorService: FormErrorService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.loginForm = this.fb.group({
      emailPhone: ['', [Validators.required]],
      password: ['']
    });

    this.loginForm = this.fb.group({
      emailPhone: ['', [Validators.required]],
      password: ['']
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });

    this.setPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]]
    });

    this.passwordResetForm = this.fb.group({
      emailPhone: ['', Validators.required],
    });

    this.loginForm.get('emailPhone')?.valueChanges.subscribe(value => {
      const isPhone = this.isPhoneNumber(value);

      if (isPhone && !this.isPhoneInput) {
        this.isPhoneInput = true;
        this.initIntlTelInput();
      } else if (!isPhone && this.isPhoneInput) {
        this.isPhoneInput = false;
        this.destroyIntlTelInput();
      }
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: environment.google_client_id,
        callback: (res: any) => this.handleGoogleToken(res)
      });

      const buttonDiv = document.getElementById("buttonDiv");
      if (buttonDiv) {
        google.accounts.id.renderButton(
          buttonDiv,
          {
            theme: "outline",
            size: "large",
            width: 360,
            shape: "pill",
            text: "signin_with",
            logo_alignment: "left"
          }
        );
      }
    }
  }

  ngAfterViewChecked() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.currentStep === 'emailPhone') {
      if (!this.googleInitialized) {
        const buttonDiv = document.getElementById("buttonDiv");
        if (buttonDiv && typeof google !== 'undefined') {
          this.googleInitialized = true;
          google.accounts.id.initialize({
            client_id: environment.google_client_id,
            callback: (res: any) => this.handleGoogleToken(res)
          });
          google.accounts.id.renderButton(
            buttonDiv,
            {
              theme: "outline",
              size: "large",
              width: 360,
              shape: "pill",
              text: "signin_with",
              logo_alignment: "left"
            }
          );
        }
      }
    } else {
      this.googleInitialized = false;
    }
  }

  isPhoneNumber(value: string): boolean {
    const trimmed = value?.trim();
    return /^[0-9]{3,15}$/.test(trimmed);
  }

  initIntlTelInput() {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      const phoneNumber = document.querySelector('#emailPhone') as HTMLInputElement;
      if (phoneNumber && !this.itiInstance) {
        this.itiInstance = intlTelInput(phoneNumber, {
          separateDialCode: true,
          allowDropdown: true,
          initialCountry: "auto",
          geoIpLookup: (callback: (countryCode: string) => void) => {
            fetch("https://ipapi.co/json")
              .then(res => res.json())
              .then(data => callback(data.country_code))
              .catch(() => callback("us"));
          },
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
        });
      }
    });
  }

  destroyIntlTelInput() {
    if (this.itiInstance) {
      this.itiInstance.destroy();
      this.itiInstance = null;
    }
  }

  onKeyUp(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value && index < this.otpArray.length - 1) {
      const nextInput = document.querySelectorAll<HTMLInputElement>('.otp-inputs input')[index + 1];
      if (nextInput) nextInput.focus();
    }

    if (event.key === 'Backspace' && !value && index > 0) {
      const prevInput = document.querySelectorAll<HTMLInputElement>('.otp-inputs input')[index - 1];
      if (prevInput) prevInput.focus();
    }
  }

  onSubmitEmailPhone() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const emailPhone = this.loginForm.get('emailPhone')?.value.trim();
    if (!emailPhone) return;

    this.loading = true;
    this.errorMessage = '';

    const phoneCodeElement = isPlatformBrowser(this.platformId) ?
      window.document.getElementsByClassName('iti__selected-dial-code')[0] : null;
    const phoneCode = phoneCodeElement ? phoneCodeElement.textContent || '' : '';
    const fullNumber = phoneCode + emailPhone;

    if (!this.emailRegex.test(emailPhone) && !this.phoneRegex.test(emailPhone)) {
      this.alertService.error('Invalid Input', 'Please enter a valid email or phone number.');
      this.loading = false;
      return;
    }

    let identifier = this.emailRegex.test(emailPhone) ? emailPhone : fullNumber;

    if (this.loginMode === 'password') {
      const password = this.loginForm.get('password')?.value.trim();
      if (!password) {
        this.alertService.error('Required', 'Password is required.');
        this.loading = false;
        return;
      }

      let email: string | null = null;
      let phoneNumber: string | null = null;
      if (this.emailRegex.test(identifier)) {
        email = identifier;
      } else {
        phoneNumber = identifier;
      }

      this.authService.loginWithPassword(email, password, phoneNumber).subscribe({
        next: (res) => {
          this.handleLoginSuccess(res);
        },
        error: (err) => {
          this.alertService.error('Login Failed', `Invalid credentials: ${err?.error?.message || err?.error}`);
          this.loading = false;
        }
      });
    } else {
      this.authService.sendOtp(identifier).subscribe({
        next: () => {
          this.otpForm.reset();
          this.startResendTimer();
          this.currentStep = 'otp';
          this.loading = false;
        },
        error: (err) => {
          this.alertService.error('OTP Failed', `Failed to send OTP. Try again. : ${err?.error?.message || err?.error}`);
          this.loading = false;
        }
      });
    }
  }

  resendOtp(): void {
    const emailPhone = this.loginForm.get('emailPhone')?.value.trim();
    const phoneCodeElement = isPlatformBrowser(this.platformId) ?
      window.document.getElementsByClassName('iti__selected-dial-code')[0] : null;
    const phoneCode = phoneCodeElement ? phoneCodeElement.textContent || '' : '';
    const fullNumber = phoneCode + emailPhone;
    const identifier = this.emailRegex.test(emailPhone) ? emailPhone : fullNumber;

    this.authService.resendOtp(identifier).subscribe({
      next: () => {
        this.otpForm.reset();
        this.startResendTimer();
        this.alertService.success('OTP Resent', 'A new verification code has been sent.');
      },
      error: (err) => {
        this.alertService.error('Error', `Failed to send OTP. Try again. : ${err?.error}`);
      }
    })
  }

  verifyOtp() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }

    const emailPhone = this.loginForm.get('emailPhone')?.value.trim();
    const phoneCodeElement = isPlatformBrowser(this.platformId) ?
      window.document.getElementsByClassName('iti__selected-dial-code')[0] : null;
    const phoneCode = phoneCodeElement ? phoneCodeElement.textContent || '' : '';
    const fullNumber = phoneCode + emailPhone;
    const otp = this.getOtpValue();
    const identifier = this.emailRegex.test(emailPhone) ? emailPhone : fullNumber;

    if (!otp || otp.length < 4) {
      this.alertService.error('Invalid OTP', 'Please enter a 4-digit verification code.');
      return;
    }

    this.loading = true;
    this.authService.verifyOtp(identifier, otp).subscribe({
      next: (res) => {
        this.handleLoginSuccess(res);
      },
      error: (err) => {
        this.alertService.error('Verification Failed', `OTP verification failed: ${err?.error}`);
        this.loading = false;
      }
    });
  }



  private handleLoginSuccess(res: any) {
    this.authService.storeToken(res.token);
    this.user = res.user;

    const userId = res.user?.patientId || res.user?.userId;
    if (userId) {
      this.sessionService.startSession(userId).subscribe();
    }

    this.isPasswordCompleted = res.hasPassword;
    this.isProfileCompleted = res.isProfileComplete;

    if (!this.isProfileCompleted) {
      this.profileForm.patchValue({
        firstName: res.user.firstName || '',
        lastName: res.user.lastName || '',
        phoneNumber: res.user.contactNumber || '',
        email: res.user.emailId || ''
      });

      if (res.user.emailId) this.profileForm.get('email')?.disable();
      if (res.user.contactNumber) this.profileForm.get('phoneNumber')?.disable();

      this.currentStep = 'completeProfile';
    } else if (!this.isPasswordCompleted) {
      this.currentStep = 'setPassword';
    } else {
      this.router.navigateByUrl(this.returnUrl);
    }
    this.loading = false;
  }

  completeProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.alertService.error('Invalid Profile', 'Please fill all the required fields.');
      return;
    }

    this.loading = true;
    const userId = this.user.patientId || this.user.userId;
    const payload = {
      userId: userId,
      firstName: this.profileForm.get('firstName')?.value.trim(),
      lastName: this.profileForm.get('lastName')?.value.trim(),
      email: this.profileForm.get('email')?.value.trim() || this.profileForm.get('email')?.value,
      phoneNumber: this.profileForm.get('phoneNumber')?.value.trim() || this.profileForm.get('phoneNumber')?.value
    }

    this.userService.completeProfile(payload).subscribe({
      next: (res) => {
        if (!this.isPasswordCompleted) {
          this.currentStep = 'setPassword';
        } else {
          this.router.navigateByUrl(this.returnUrl);
        }
        this.loading = false;
      },
      error: (err) => {
        this.alertService.error('Update Failed', `Failed to complete profile: ${err?.error}`);
        this.loading = false;
      }
    })
  }

  setPassword() {
    if (this.setPasswordForm.invalid) {
      this.setPasswordForm.markAllAsTouched();
      this.alertService.error('Invalid Password', 'Please enter a valid password.');
      return;
    }

    const newPassword = this.setPasswordForm.get('newPassword')?.value;
    const confirmPassword = this.setPasswordForm.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      this.alertService.error('Mismatch', 'Passwords do not match.');
      return;
    }

    this.loading = true;
    const userId = this.user.patientId || this.user.userId;
    const payload = {
      userId: userId,
      password: newPassword.trim()
    }
    this.userService.setProfilePassword(payload).subscribe({
      next: (res) => {
        this.router.navigateByUrl(this.returnUrl);
        this.loading = false;
      },
      error: (err) => {
        this.alertService.error('Error', `Failed to set password: ${err.error}`);
        this.loading = false;
      }
    })
  }

  userRequestPasswordReset(): void {
    if (this.passwordResetForm.invalid) {
      this.passwordResetForm.markAllAsTouched();
      this.alertService.error('Error', 'Please enter a valid Email/Phone');
      return;
    }

    this.loading = true;
    this.authService.userRequestPasswordReset(this.passwordResetForm.get("emailPhone")?.value.trim()).subscribe({
      next: (res: any) => {
        this.alertService.success('Request Sent', 'Password reset instructions have been sent.');
        this.loading = false;
      },
      error: (err: any) => {
        this.alertService.error('Request Failed', `Something went wrong. Please try again. ${err?.error}`);
        this.loading = false;
      }
    })
  }

  goBackToEmailPhone() {
    this.currentStep = 'emailPhone';
  }

  handleGoogleToken(response: any) {
    if (response?.credential) {
      this.loading = true;
      const idToken = response.credential;

      this.authService.loginWithGoogle(idToken).subscribe({
        next: (res) => {
          this.handleLoginSuccess(res);
        },
        error: (err) => {
          this.alertService.error('Google Login Failed', `${err?.error || 'Please try again.'}`);
          this.loading = false;
        }
      });
    }
  }

  getOtpValue(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    let otp = '';
    const inputs = document.querySelectorAll<HTMLInputElement>('.otp-inputs input');
    inputs.forEach(input => {
      otp += input.value;
    });
    return otp;
  }

  private startResendTimer() {
    this.canResend = false;
    this.countdown = 30;
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.ngZone.runOutsideAngular(() => {
      this.countdownInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.countdown--;

          if (this.countdown <= 0) {
            this.canResend = true;
            clearInterval(this.countdownInterval);
          }
        });
      }, 1000);
    });
  }

  isFormValid(): boolean {
    if (this.currentStep === 'emailPhone') return this.loginForm.valid;
    if (this.currentStep === 'otp') return this.getOtpValue().length === 4;
    if (this.currentStep === 'completeProfile') return this.profileForm.valid;
    if (this.currentStep === 'setPassword') return this.setPasswordForm.valid;
    return false;
  }

  get maskedIdentifier(): string {
    const emailPhone = this.loginForm.get('emailPhone')?.value || '';
    if (emailPhone.includes('@')) {
      const parts = emailPhone.split('@');
      return parts[0].substring(0, 2) + "****@" + parts[1];
    }
    return "****" + emailPhone.slice(-4);
  }

  toggleLoginMode() {
    this.loginMode = this.loginMode === 'otp' ? 'password' : 'otp';
    const passwordControl = this.loginForm.get('password');
    if (this.loginMode === 'password') {
      passwordControl?.setValidators([Validators.required]);
    } else {
      passwordControl?.clearValidators();
    }
    passwordControl?.updateValueAndValidity();
  }

  goToPasswordReset() {
    this.currentStep = 'resetPassword';
  }
}
