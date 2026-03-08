import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * FormErrorService
 * -----------------
 * Provides a centralized place to define validation error messages and retrieve them
 * in a reactive way. Components can inject this service and call `getErrorMessage`
 * to obtain a user‑friendly string for a given form control. The service also
 * exposes a `formErrors$` observable that emits the current map of control names
 * to error messages whenever `updateFormErrors` is called – this enables a UI
 * component to reactively display a summary of form errors.
 */
@Injectable({
    providedIn: 'root',
})
export class FormErrorService {
    /**
     * Mapping of Angular validator keys to human‑readable messages. The value can
     * be a static string or a function that receives the ValidationErrors object
     * and returns a formatted string (e.g., for minlength).
     */
    private readonly defaultMessages = new Map<string, string | ((error: any) => string)>([
        ['required', 'This field is required'],
        ['email', 'Please enter a valid email address'],
        ['minlength', (err) => `Minimum length is ${err.requiredLength}`],
        ['maxlength', (err) => `Maximum length is ${err.requiredLength}`],
        ['pattern', 'The entered value does not match the required pattern'],
    ]);

    /**
     * Reactive store of the latest error messages for a form. The key is the form
     * control name and the value is the resolved error string.
     */
    private formErrorsSubject = new BehaviorSubject<Record<string, string>>({});
    readonly formErrors$: Observable<Record<string, string>> = this.formErrorsSubject.asObservable();

    /**
     * Retrieve a user‑friendly error message for a specific form control.
     * If the control has multiple errors, the first one (by object key order) is
     * used. If no custom message is defined, a generic fallback is returned.
     */
    getErrorMessage(control: AbstractControl | null): string | null {
        if (!control || !control.errors) {
            return null;
        }
        const errorKey = Object.keys(control.errors)[0];
        const errorValue = control.errors[errorKey];
        const messageTemplate = this.defaultMessages.get(errorKey);
        if (typeof messageTemplate === 'function') {
            return (messageTemplate as (e: any) => string)(errorValue);
        }
        return (messageTemplate as string) ?? 'Invalid field';
    }

    /**
     * Update the reactive error map for a given form group. Call this from a
     * component after any validation change (e.g., on valueChanges subscription).
     */
    updateFormErrors(formGroup: { [key: string]: AbstractControl }): void {
        const errors: Record<string, string> = {};
        for (const controlName of Object.keys(formGroup)) {
            const control = formGroup[controlName];
            const msg = this.getErrorMessage(control);
            if (msg) {
                errors[controlName] = msg;
            }
        }
        this.formErrorsSubject.next(errors);
    }
}
