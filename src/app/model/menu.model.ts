export interface Piatto {
  nome: string;
  ingredienti?: string | string[];
  prezzo?: string;
  allergeni?: string[];
}

export interface SezioneMenu {
  id: string;
  titolo: string;
  aperto: boolean;
  piatti: Piatto[];
}