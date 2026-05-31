import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { routes } from './app.routes';
import { Observable, of } from 'rxjs';

import it from '../assets/i18n/it.json';
import en from '../assets/i18n/en.json';
import fr from '../assets/i18n/fr.json';
import de from '../assets/i18n/de.json';

const TRANSLATIONS: Record<string, TranslationObject> = { it, en, fr, de };

class StaticLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS['it']);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'it',
      loader: { provide: TranslateLoader, useClass: StaticLoader },
    }),
  ]
};
