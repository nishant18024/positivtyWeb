import { Component, Input, Optional } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormErrorService } from '../../services/form-error.service';

/**
 * FormErrorComponent
 * -----------------
 * Displays a validation error message for a given form control only if
 * the field has been touched, dirtied, or the parent form is submitted.
 */
@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="errorMessage">
      <p class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
    </ng-container>
  `,
})
export class FormErrorComponent {
  @Input() controlName!: string;
  @Input() control!: AbstractControl | null;

  constructor(
    private formErrorService: FormErrorService,
    @Optional() private formGroupDirective: FormGroupDirective
  ) { }

  get errorMessage(): string | null {
    let fieldControl = this.control;

    if (!fieldControl && this.formGroupDirective && this.controlName) {
      fieldControl = this.formGroupDirective.form.get(this.controlName);
    }

    if (fieldControl && fieldControl.errors) {
      const isSubmitted = this.formGroupDirective && this.formGroupDirective.submitted;
      if (fieldControl.touched || fieldControl.dirty || isSubmitted) {
        return this.formErrorService.getErrorMessage(fieldControl);
      }
    }
    return null;
  }
}
