import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header-component.html',
  styles: [],
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  isLangOpen = signal(false);

  private router = inject(Router);
  private el = inject(ElementRef);
  readonly langService = inject(LanguageService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isLangOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLangMenu() {
    this.isLangOpen.update((v) => !v);
  }

  selectLang(lang: string) {
    this.langService.switchLang(lang);
    this.isLangOpen.set(false);
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
