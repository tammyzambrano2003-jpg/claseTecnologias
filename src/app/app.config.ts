import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore,provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp({
  apiKey: "AIzaSyCcxtP6_SB8SPi1Icb7fl9MHHSX_4j86_Y",
  authDomain: "clasetecnologias-d8af3.firebaseapp.com",
  projectId: "clasetecnologias-d8af3",
  storageBucket: "clasetecnologias-d8af3.firebasestorage.app",
  messagingSenderId: "451524088921",
  appId: "1:451524088921:web:672f0acb6e3b076cd5cd48",
  measurementId: "G-VJ3J8F1X72"
})),
provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
