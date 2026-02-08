import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  menu: SezioneMenu[] = [
    { id: 'sciue', titolo: 'SCIUÈ SCIUÈ', aperto: false, piatti: SCIUE },
    { id: 'antipasti', titolo: 'ANTIPASTI', aperto: false, piatti: ANTIPASTI },
    { id: 'mozzarelle', titolo: 'MOZZARELLA DI BUFALA DOP', aperto: false, piatti: MOZZARELLE },
    { id: 'insalatone', titolo: 'INSALATONE', aperto: false, piatti: INSALATONE },
    { id: 'pizze', titolo: 'PIZZE', aperto: false, piatti: PIZZE },
    { id: 'stagionali', titolo: 'PIZZE STAGIONALI', aperto: false, piatti: STAGIONALI },
    { id: 'ripiene', titolo: 'PIZZE RIPIENE', aperto: false, piatti: RIPIENE },
    { id: 'fritta', titolo: 'PIZZA FRITTA', aperto: false, piatti: PIZZE_FRITTE },
    { id: 'integrali', titolo: 'PIZZE INTEGRALI', aperto: false, piatti: PIZZE_INTEGRALI },
    { id: 'spaghetti', titolo: 'SPAGHETTI DI GRAGNANO', aperto: false, piatti: SPAGHETTI },
    { id: 'pasta', titolo: 'PASTA FRESCA DI SEMOLA DI GRANO DURO', aperto:false, piatti: PASTA},
    { id: 'carne', titolo: 'CARNE', aperto: false, piatti: CARNE },
    { id: 'contorni', titolo: 'CONTORNI', aperto: false, piatti: CONTORNI },
    { id: 'cantina', titolo: 'CANTINA', aperto: false, piatti: CANTINA },
    { id: 'birre', titolo: 'BIRRE', aperto: false, piatti:  BIRRE},
    { id: 'bibite', titolo: 'BIBITE', aperto: false, piatti: BIBITE },

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
