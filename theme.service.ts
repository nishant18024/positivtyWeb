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
    } else {
      this.enableLight();
    }
  }

  toggle() {
    if (!this.isBrowser) return;
    this.darkMode$.value ? this.enableLight() : this.enableDark();
  }

  enableDark() {
    if (!this.isBrowser) return;
    document.documentElement.classList.add('dark', 'p-dark');
    document.body.classList.add('dark', 'p-dark');
    document.documentElement.style.colorScheme = 'dark';
    localStorage.setItem('theme', 'dark');
    this.darkMode$.next(true);
  }

  enableLight() {
    if (!this.isBrowser) return;
    document.documentElement.classList.remove('dark', 'p-dark');
    document.body.classList.remove('dark', 'p-dark');
    document.documentElement.style.colorScheme = 'light';
    localStorage.setItem('theme', 'light');
    this.darkMode$.next(false);
  }

  isDark(): boolean {
    return this.darkMode$.value;
  }
}