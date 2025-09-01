import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory pour charger les fichiers JSON de traduction
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslateLoader = {
  provide: TranslateLoader,
  useFactory: HttpLoaderFactory,
  deps: [HttpClient]
};

export const provideTranslateService = {
  provide: TranslateService,
  useFactory: (translate: TranslateService) => {
    translate.setDefaultLang('en');  // Langue par défaut
    translate.use('en');  // Utilisation initiale de la langue
    return translate;
  },
  deps: [TranslateService]
};
