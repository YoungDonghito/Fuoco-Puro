import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const LANGUAGES = ['it', 'en', 'fr', 'de'] as const;
type Language = typeof LANGUAGES[number];

@Injectable({ providedIn: 'root' })
export class LanguageService {

  readonly languages = LANGUAGES;

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  currentLang = signal<Language>(this.getSavedLang());

  constructor(private translate: TranslateService) {
    effect(() => {
      const lang = this.currentLang();
      this.translate.use(lang);
      if (this.isBrowser) {
        localStorage.setItem('lang', lang);
      }
    });
  }

  switchLang(lang: string) {
    if (this.languages.includes(lang as Language)) {
      this.currentLang.set(lang as Language);
    }
  }

  private getSavedLang(): Language {
    if (!this.isBrowser) return 'it';
    const saved = localStorage.getItem('lang');
    return saved && this.languages.includes(saved as Language) ? (saved as Language) : 'it';
  }
}
