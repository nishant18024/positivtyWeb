import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }
  step = 1;

  form = {
    identifier: '',
    otp: ['', '', '', ''],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get maskedIdentifier(): string {
    const value = this.form.identifier || '';

    if (value.includes('@')) {
      // Email masking
      const [name, domain] = value.split('@');
      return `${name.slice(0, 2)}****@${domain}`;
    }

    // Phone masking
    return value.replace(/\d(?=\d{4})/g, '*');
  }

  goBackToLogin() {
    this.step = 1;
  }

  showPassword = false;
  showConfirmPassword = false;
  goHome() {
    this.router.navigate(['/']);
  }

}
