import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private dark = false;

  constructor() {
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      this.enableDark();
    } else if (saved === 'light') {
      this.enableLight();
    } else {
      // 👇 auto-detect system theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) this.enableDark();
      else this.enableLight();
    }
  }

  toggle() {
    this.dark ? this.enableLight() : this.enableDark();
  }

  enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.dark = true;
  }

  enableLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.dark = false;
  }

  isDark() {
    return this.dark;
  }
}
