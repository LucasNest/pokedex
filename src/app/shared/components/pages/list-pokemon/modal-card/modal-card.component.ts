import { Component } from '@angular/core';
import { PokemonList } from 'src/app/shared/interfaces/pokemon';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {
  pokemon: PokemonList;
  visible: boolean;
  
  open(pokemon: PokemonList) {
    this.pokemon = pokemon;
    this.visible = true;
  }
}
