import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MenuComponent } from './menu-component/menu-component';
import { ContattiComponent } from './contatti-component/contatti-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contatti', component: ContattiComponent}
];
