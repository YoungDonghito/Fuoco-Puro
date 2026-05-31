import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SezioneMenu } from '../model/menu.model';

import { PIZZE } from '../../assets/menu-list/pizze';
import { STAGIONALI } from '../../assets/menu-list/stagionali';
import { ANTIPASTI } from '../../assets/menu-list/antipasti';
import { SCIUE } from '../../assets/menu-list/sciue';
import { INSALATONE } from '../../assets/menu-list/insalatone';
import { MOZZARELLE } from '../../assets/menu-list/mozzarella';
import { RIPIENE } from '../../assets/menu-list/ripieni';
import { PIZZE_FRITTE } from '../../assets/menu-list/fritta';
import { PIZZE_INTEGRALI } from '../../assets/menu-list/integrali';
import { SPAGHETTI } from '../../assets/menu-list/spaghetti';
import { PASTA } from '../../assets/menu-list/pasta';
import { CARNE } from '../../assets/menu-list/carne';
import { CONTORNI } from '../../assets/menu-list/contorni';
import { CANTINA } from '../../assets/menu-list/cantina';
import { BIRRE } from '../../assets/menu-list/birre';
import { BIBITE } from '../../assets/menu-list/bibite';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  menu: SezioneMenu[] = [
    { id: 'sciue', titolo: 'MENU.SCIUE.TITOLO', aperto: false, piatti: SCIUE },
    { id: 'antipasti', titolo: 'MENU.ANTIPASTI.TITOLO', aperto: false, piatti: ANTIPASTI },
    { id: 'mozzarelle', titolo: 'MENU.MOZZARELLE.TITOLO', aperto: false, piatti: MOZZARELLE },
    { id: 'insalatone', titolo: 'MENU.INSALATONE.TITOLO', aperto: false, piatti: INSALATONE },
    { id: 'pizze', titolo: 'MENU.PIZZE.TITOLO', aperto: false, piatti: PIZZE },
    { id: 'stagionali', titolo: 'MENU.STAGIONALI.TITOLO', aperto: false, piatti: STAGIONALI },
    { id: 'ripiene', titolo: 'MENU.RIPIENE.TITOLO', aperto: false, piatti: RIPIENE },
    { id: 'fritta', titolo: 'MENU.FRITTA.TITOLO', aperto: false, piatti: PIZZE_FRITTE },
    { id: 'integrali', titolo: 'MENU.INTEGRALI.TITOLO', aperto: false, piatti: PIZZE_INTEGRALI },
    { id: 'spaghetti', titolo: 'MENU.SPAGHETTI.TITOLO', aperto: false, piatti: SPAGHETTI },
    { id: 'pasta', titolo: 'MENU.PASTA.TITOLO', aperto: false, piatti: PASTA },
    { id: 'carne', titolo: 'MENU.CARNE.TITOLO', aperto: false, piatti: CARNE },
    { id: 'contorni', titolo: 'MENU.CONTORNI.TITOLO', aperto: false, piatti: CONTORNI },
    { id: 'cantina', titolo: 'MENU.CANTINA.TITOLO', aperto: false, piatti: CANTINA },
    { id: 'birre', titolo: 'MENU.BIRRE.TITOLO', aperto: false, piatti: BIRRE },
    { id: 'bibite', titolo: 'MENU.BIBITE.TITOLO', aperto: false, piatti: BIBITE },

  ];

  toggleSezione(index: number) {
    this.menu.forEach((item, i) => {
      if (i !== index) item.aperto = false;
    });

    this.menu[index].aperto = !this.menu[index].aperto;
  }

  isList(val: any): boolean {
    return Array.isArray(val);
  }
}
