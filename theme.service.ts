import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isBrowser: boolean;
  private darkMode$ = new BehaviorSubject<boolean>(false);
  public isDark$ = this.darkMode$.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.isBrowser) return;

    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      this.enableDark();
    } else if (saved === 'light') {
      this.enableLight();
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      prefersDark ? this.enableDark() : this.enableLight();
    }
  }

  toggle() {
    if (!this.isBrowser) return;
    this.darkMode$.value ? this.enableLight() : this.enableDark();
  }

  enableDark() {
    if (!this.isBrowser) return;
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.darkMode$.next(true);
  }

  enableLight() {
    if (!this.isBrowser) return;
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.darkMode$.next(false);
  }

  isDark(): boolean {
    return this.darkMode$.value;
  }
}