import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { FooterComponent } from './footer-component/footer-component';
import { HomeComponent } from './home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fuoco-puro');
}
