import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contatti-component',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './contatti-component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .custom-carousel .p-carousel-content {
        margin: 0 !important;
        padding: 0 !important;
      }

      .custom-carousel .p-carousel-item {
        display: flex !important;
        justify-content: center;
        align-items: center;
      }

      .custom-carousel .p-button {
        padding: 0 !important;
      }

      .btn-white-always,
      .btn-white-always:hover,
      .btn-white-always:active,
      .btn-white-always:focus,
      .p-button.btn-white-always:not(:disabled):hover {
        background: transparent !important;
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }

      .btn-white-always .pi {
        color: #fcfbf7 !important;
        font-size: 2.5rem !important;
        opacity: 0.8;
        transition: opacity 0.2s;
      }

      .btn-white-always:hover .pi {
        opacity: 1 !important;
        color: #fcfbf7 !important;
      }

      .p-ink {
        display: none !important;
      }
    `,
  ],
})
export class ContattiComponent {
  products = signal([{ image: 'images/enzo-dong.jpeg' }, { image: 'images/pizza.png' }]);
}
