import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
   readonly theme = signal<Theme>('light');

  constructor() {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      this.setTheme(storedTheme);
    }
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
}
