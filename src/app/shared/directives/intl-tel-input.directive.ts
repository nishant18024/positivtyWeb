import { Directive, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import intlTelInput from 'intl-tel-input';

@Directive({
    selector: '[appIntlTelInput]',
    standalone: true
})
export class IntlTelInputDirective implements AfterViewInit, OnDestroy {
    @Input() selectedCountry: string = '';
    @Input() preferredCountries: string[] = ['in', 'us', 'gb'];

    private itiInstance: any;

    constructor(
        private el: ElementRef,
        private ngZone: NgZone,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Use setTimeout to ensure DOM is fully rendered, especially after route navigation
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.initIti();
                }, 0);
            });
        }
    }

    private initIti() {
        const countryToUse = this.selectedCountry || 'in';

        this.itiInstance = intlTelInput(this.el.nativeElement, {
            separateDialCode: true,
            initialCountry: countryToUse,
            preferredCountries: this.preferredCountries,
            utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js',
        });
    }

    ngOnDestroy() {
        if (this.itiInstance) {
            this.itiInstance.destroy();
        }
    }

    // Allow other components to access the instance if needed (e.g., to get the full number)
    getInstance() {
        return this.itiInstance;
    }
}
