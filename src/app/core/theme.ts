import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(true);

  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  }

  apply() {
    const stored = localStorage.getItem('theme');
    this.isDark.set(stored ? stored === 'dark' : true);
  }

  toggle() {
    this.isDark.update(v => !v);
  }
}
