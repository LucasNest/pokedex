import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PokemonList } from 'src/app/shared/interfaces/pokemon';
import { ModalCardComponent } from './modal-card/modal-card.component';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonList: PokemonList[][] = [];

  page: number = 0;
  pageSize: number = 9;

  types: { name: string, code: string }[] = [
    { name: 'Grass', code: 'grass' },
    { name: 'Water', code: 'water' },
    { name: 'Fire', code: 'fire' },
    { name: 'Poison', code: 'poison' },
    { name: 'Flying', code: 'flying' },
    { name: 'Bug', code: 'bug' },
    { name: 'Normal', code: 'normal' },
    { name: 'Electric', code: 'electric' },
    { name: 'Ground', code: 'ground' },
    { name: 'Rock', code: 'rock' },
    { name: 'Fairy', code: 'fairy' },
    { name: 'Fighting', code: 'fighting' },
    { name: 'Psychic', code: 'psychic' },
    { name: 'Steel', code: 'steel' },
    { name: 'Ice', code: 'ice' },
    { name: 'Ghost', code: 'ghost' },
    { name: 'Dragon', code: 'dragon' },
    { name: 'Dark', code: 'dark' }
  ];

  filterValue: string;
  filterTypeValue: { name: string, code: string }[];

  @ViewChild(ModalCardComponent) modalCardComponent: ModalCardComponent;

  ngOnInit(): void {
    this.getPokemonList();
    this.adjustPageSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustPageSize();
  }

  private adjustPageSize(): void {
    const width = window.innerWidth;
    let newPageSize = 9;

    if (width <= 1024) {
      newPageSize = 8;
    }

    if (this.pageSize !== newPageSize) {
      this.pageSize = newPageSize;
      this.getPokemonList();
    }
  }

  getPokemonList() {
    const cache = localStorage.getItem('pokemons');
    if (cache) {
      const pokemonList = JSON.parse(cache);
      this.paginatePokemonList(pokemonList);
    }
  }

  paginatePokemonList(pokemonList: PokemonList[]) {
    const pageSize = this.pageSize;
    const paginated: PokemonList[][] = [];

    for (let i = 0; i < pokemonList.length; i += pageSize) {
      const chunk = pokemonList.slice(i, i + pageSize);
      paginated.push(chunk);
    }
    this.pokemonList = paginated;
  }

  filter() {
    this.page = 0;
    const cache = localStorage.getItem('pokemons');

    if (!cache) return;
    const pokemonList = JSON.parse(cache);

    const pokemonListFiltered = pokemonList.filter(
      (pokemon: PokemonList) =>
        pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    this.paginatePokemonList(pokemonListFiltered);
  }

  filterType() {
    this.page = 0;
    const cache = localStorage.getItem('pokemons');

    if (!cache) return;
    const pokemonList = JSON.parse(cache);

    const selectedTypes = this.filterTypeValue.map(type => type.code);


    const pokemonListFiltered = pokemonList.filter(
      (pokemon: PokemonList) => {
        if (!this.filterTypeValue || this.filterTypeValue.length === 0) {
          return true;
        }
        const pokemonTypes = pokemon.type.map(t => t.type.name);

        return selectedTypes.every(selected => pokemonTypes.includes(selected));
      }
    );
    this.paginatePokemonList(pokemonListFiltered);
  }

  sortCards(event: Event, campo: string) {
    const selectElement = event.target as HTMLSelectElement;
    const ordem = selectElement.value;

    this.page = 0;

    const cache = localStorage.getItem('pokemons');
    if (!cache) return;

    const pokemonList = JSON.parse(cache);

    let key: keyof PokemonList;
    if (campo === 'ataque') {
      key = 'atk';
    } else if (campo === 'experiencia') {
      key = 'xp';
    } else {
      return;
    }

    switch (ordem) {
      case 'asc':
        pokemonList.sort((a: PokemonList, b: PokemonList) => {
          const aValue = Number(a[key]);
          const bValue = Number(b[key]);
          return aValue - bValue;
        });
        break;
      case 'desc':
        pokemonList.sort((a: PokemonList, b: PokemonList) => {
          const aValue = Number(a[key]);
          const bValue = Number(b[key]);
          return bValue - aValue;
        });
        break;
      default:
        pokemonList
    }
    this.paginatePokemonList(pokemonList);
  }

  openModal(pokemon: PokemonList) {
    this.modalCardComponent.open(pokemon);
  }
}
