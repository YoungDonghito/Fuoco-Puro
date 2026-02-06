import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home-component/home-component';

import { provideRouter } from '@angular/router';

bootstrapApplication(HomeComponent, {
  providers: [
    provideRouter([])
  ]
}).catch((err) => console.error(err));