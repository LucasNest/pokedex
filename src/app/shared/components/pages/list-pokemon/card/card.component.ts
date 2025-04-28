import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonList } from 'src/app/shared/interfaces/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemon: PokemonList;
  @Output() onSelected = new EventEmitter<PokemonList>();

  selectPokemon(pokemon: PokemonList) {
    this.onSelected.emit(pokemon);
  }

}
