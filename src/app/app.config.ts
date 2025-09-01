import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideTranslateLoader, provideTranslateService } from './config/translate.providers'; // Importez vos fournisseurs


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ 
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),  // Fournisseur HttpClient nécessaire pour ngx-translate
     provideTranslateLoader,  // Fournisseur pour charger les fichiers de traduction
     provideTranslateService  // Fournisseur pour configurer TranslateService
 ]
};
