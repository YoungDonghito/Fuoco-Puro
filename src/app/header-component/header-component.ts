import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-component.html',
  styles: [],
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  private router = inject(Router)

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToMenu() {
    this.router.navigate(['/menu']);
    this.isMenuOpen = false;
  }

  goToContatti() {
    this.router.navigate(['/contatti']);
    this.isMenuOpen = false;
  }

  goToHome() {
    this.router.navigate(['/']);
    this.isMenuOpen = false;
  }
}
