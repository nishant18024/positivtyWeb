import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/api/user.service';
import { AuthService } from '../../core/services/api/auth.service';
import { Router } from '@angular/router';
import { IntlTelInputDirective } from '../../shared/directives/intl-tel-input.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IntlTelInputDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  isLoading = true;
  isEditMode = false;
  isSaving = false;
  activeTab = 'Profile';
  profileData: any = null;
  profileForm!: FormGroup;
  patientId: number | null = null;
  selectedImageFile: File | null = null;
  uploadedImageUrl: string | null = null;

  tabs = [
    { name: 'Profile', badge: 0 },
    { name: 'Sessions Summary', badge: 0 },
    { name: 'My Packages', badge: 3 },
    { name: 'My Webinars', badge: 3 },
    { name: 'My Groups', badge: 0 },
    { name: 'Payment & Invoice', badge: 0 },
    { name: 'Referrals & Vouchers', badge: 0 },
    { name: 'Account', badge: 0 },
    { name: 'Logout', badge: 0 }
  ];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fetchProfile();
  }

  fetchProfile() {
    this.authService.currentUser$.subscribe({
      next: (user) => {
        if (!user) {
          this.isLoading = false;
          return;
        }

        // 1. First check if token exists and can be parsed
        const token = this.authService.getToken();
        let claimId = null;

        if (token) {
          try {
            const payloadUrl = token.split('.')[1];
            const payloadBase64 = payloadUrl.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(payloadBase64).split('').map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const decodedToken = JSON.parse(jsonPayload);
            claimId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
          } catch (e) {
            console.warn('Could not parse JWT token', e);
          }
        }

        // 2. Fallback to user object if token claim failed
        const idToUse = claimId || user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || user.id;

        if (idToUse) {
          const patientId = Number(idToUse);
          this.patientId = patientId;
          this.loadProfileData(patientId);
        } else {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadProfileData(patientId: number) {
    this.isLoading = true;
    this.userService.getProfile(patientId).subscribe({
      next: (res) => {
        const data = res?.body || res; // depending on interceptors/response format
        this.profileData = data || {};

        // Map API response to UI fields (adjust property names based on actual API payload)
        this.profileData.firstName = data.firstName || 'Nishant';
        this.profileData.lastName = data.lastName || 'Kumar';

        // Calculate Initials safely
        let initials = 'NK';
        if (data.firstName && data.lastName) {
          initials = `${data.firstName.charAt(0)}${data.lastName.charAt(0)}`.toUpperCase();
        } else if (data.firstName) {
          initials = data.firstName.substring(0, 2).toUpperCase();
        }
        this.profileData.initials = initials;

        this.profileData.isVerified = data.isEmailVerified || data.isPhoneVerified || true;
        this.profileData.phone = data.contactNumber || '8765656565';
        this.profileData.email = data.emailId || 'nishant.workstation@gmail.com';

        // Load existing image if any
        this.uploadedImageUrl = data.fileName || data.profilePicture || data.fileBase64 || null;

        // Other Information
        this.profileData.gender = data.gender || 'NA';
        this.profileData.dob = data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : 'NA';
        this.profileData.emergencyContact = data.emergencyContact || 'NA';

        // Build address
        let addr = data.address || '';
        if (data.city) addr += (addr ? ', ' : '') + data.city;
        if (data.state) addr += (addr ? ', ' : '') + data.state;
        if (data.country) addr += (addr ? ', ' : '') + data.country;
        if (data.zipCode) addr += (addr ? ' ' : '') + data.zipCode;

        this.profileData.address = addr || 'NA';
        this.profileData.countryCode = data.countryCode || data.countryResidenceId || 'in';
        this.initForm(data);

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching profile', err);
        // Fallback fake data layout during development errors
        const fallbackData = {
          firstName: 'Nishant',
          lastName: 'Kumar',
          initials: 'NK',
          isVerified: true,
          phone: '8765656565',
          email: 'nishant.workstation@gmail.com',
          gender: 'NA',
          dob: 'NA',
          emergencyContact: 'NA',
          address: 'NA',
          city: '', state: '', country: '', zipCode: ''
        };
        this.profileData = fallbackData;
        this.initForm(fallbackData);
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
      }
    });
  }

  initForm(data: any) {
    this.profileForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      phone: [data?.contactNumber || data?.phone || '', Validators.required],
      email: [{ value: data?.emailId || data?.email || '', disabled: true }, [Validators.required, Validators.email]],
      gender: [data?.gender || ''],
      dob: [data?.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : ''],
      emergencyContact: [data?.emergencyContact || ''],
      streetInfo: [data?.address || ''],
      city: [data?.city || ''],
      state: [data?.state || ''],
      country: [data?.country || ''],
      zipCode: [data?.zipCode || '']
    });
  }

  triggerFileInput() {
    const fileInput = document.getElementById('profilePicInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;

    // Scroll to top when toggling (especially on reset)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (!this.isEditMode && this.profileData) {
      // Revert changes on cancel (simulate reverting to baseline)
      this.initForm(this.profileData);
      this.uploadedImageUrl = this.profileData.fileName || this.profileData.profilePicture || this.profileData.fileBase64 || null;
      this.selectedImageFile = null;
    }
  }

  saveProfile() {
    if (this.profileForm.valid && this.patientId) {
      this.isSaving = true;
      if (this.selectedImageFile) {
        const formData = new FormData();
        formData.append('file', this.selectedImageFile);

        this.userService.uploadFile(formData, 'user').subscribe({
          next: (res: any) => {
            const imageUrl = typeof res === 'string' ? res : (res?.url || res?.data?.url || res?.fileName || res?.message || '');
            this.submitProfileDetails(imageUrl);
          },
          error: (err) => {
            console.error('Upload failed', err);
            this.isSaving = false;
          }
        });
      } else {
        // Just submit details
        this.submitProfileDetails(this.uploadedImageUrl || '');
      }
    }
  }

  submitProfileDetails(profilePictureUrl: string) {
    const formVals = this.profileForm.getRawValue();
    const payload = {
      patientId: this.patientId,
      ProfilePicture: profilePictureUrl,
      FirstName: formVals.firstName,
      LastName: formVals.lastName,
      ContactNumber: formVals.phone,
      Email: formVals.email,
      Gender: formVals.gender,
      DateOfBirth: formVals.dob,
      EmergencyContactInfo: formVals.emergencyContact,
      StreetBuilding: formVals.streetInfo,
      CityTown: formVals.city,
      StateProvince: formVals.state,
      Country: formVals.country,
      PostalCode: formVals.zipCode
    };

    this.userService.saveProfileData(payload).subscribe({
      next: (res) => {
        this.isSaving = false;
        this.isEditMode = false;
        this.fetchProfile(); // Reload data to show saved view
      },
      error: (err) => {
        console.error('Failed to save profile', err);
        this.isSaving = false;
      }
    });
  }

  selectTab(tabName: string) {
    if (tabName === 'Logout') {
      this.authService.clearToken();
      this.router.navigate(['/login']);
      return;
    }
    this.activeTab = tabName;
  }
}
