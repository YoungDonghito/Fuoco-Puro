import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './home-component.html',
  styles: [],
})
export class HomeComponent {
  url = 'https://www.google.com/maps/d/edit?mid=1oJ547v0ceP2IQAG4VQQSVAXM1AY5Lbw&usp=sharing';
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
