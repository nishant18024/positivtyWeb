import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CookieService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    set(name: string, value: string, days: number = 7) {
        if (isPlatformBrowser(this.platformId)) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "; expires=" + date.toUTCString();
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        }
    }

    get(name: string): string | null {
        if (isPlatformBrowser(this.platformId)) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
        }
        // For Server side, we'd normally inject REQUEST, but for simple name display on first load,
        // handling it in component on browser is often enough unless the server MUST render the name.
        // In Angular SSR, you can use the @Inject(REQUEST) to get the headers.
        return null;
    }

    delete(name: string) {
        this.set(name, "", -1);
    }
}
