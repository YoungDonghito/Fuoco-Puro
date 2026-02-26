import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  url = 'https://www.google.com/maps/d/edit?mid=1oJ547v0ceP2IQAG4VQQSVAXM1AY5Lbw&usp=sharing';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pizzeria Fuoco Puro Montanara | Parma');

    this.metaService.updateTag({ name: 'description', content: 'Vieni ad assaggiare la vera pizza da Fuoco Puro nel quartiere Montanara a Parma.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Pizzeria Fuoco Puro Montanara | Parma' });
    this.metaService.updateTag({ property: 'og:description', content: 'Vieni ad assaggiare la vera pizza da Fuoco Puro nel quartiere Montanara a Parma.' });
    this.metaService.updateTag({ property: 'og:type', content: 'restaurant.restaurant' });
    this.metaService.updateTag({ property: 'og:locale', content: 'it_IT' });

    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "",
      "image": "",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Parma",
        "postalCode": "",
        "addressCountry": "IT"
      },
      "servesCuisine": "Pizza",
      "priceRange": "€€",
      "telephone": "",
      "url": ""
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(this.document.head, script);
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}