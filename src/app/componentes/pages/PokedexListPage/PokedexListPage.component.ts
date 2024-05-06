import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-page2',
  templateUrl: './PokedexListPage.component.html',
  styleUrls: ['./PokedexListPage.component.css'],
})
export class PokedexListPageComponent {

  tipo = new FormControl('');

  typeList: string[] = ['fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dark', 'dragon', 'steel', 'fairy', 'normal'];

  modalClosed: boolean = true;

  clickDisableVoltar: boolean = false;

  clickDisableSeguir: boolean = false;

  pokemonSelected: any;

  pokemonInput: any = '';

  isLoading: Subject<boolean> = this.pokemonService.isLoading;

  listaPokemons: any = [];

  corte: number = 12;

  listaPokemonsDividida: any = [];

  valuePage: any = 0;

  listaOrdenada: any = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.listarPokemons();

  }

  listarPokemons() {

    this.listaPokemons = JSON.parse(localStorage.getItem('pokemonCache')!);
    this.dividirLista(this.listaPokemons);

  }

  dividirLista(listaPokemons) {

    for (let i = 0; i < this.listaPokemons.length; i = i + this.corte) {
      this.listaPokemonsDividida.push(listaPokemons.slice(i, i + this.corte));
    }

  }

  pageProximo() {

    if (this.valuePage < this.listaPokemonsDividida.length - 1) {
      this.valuePage = this.valuePage + 1;
      this.clickDisableVoltar = false;
    } else this.clickDisableSeguir = true;

  }

  pageAnterior() {

    if (this.valuePage > 0) {
      this.valuePage = this.valuePage - 1;
      this.clickDisableSeguir = false;
    } else this.clickDisableVoltar = true;

  }

  modalFunction(card) {

    this.pokemonSelected = card;
    this.modalClosed = false;

  }

  closeModal(event) {
    this.modalClosed = true;
  }

  searchPokemon() {
    if (this.pokemonInput == '') {
      this.listaPokemonsDividida = [];
      this.valuePage = 0;
      this.listarPokemons();
    } else {
      this.listaPokemonsDividida = [];
      let lista = this.pokemonService.getPokemonCache(this.pokemonInput);

      this.dividirLista(lista);
    }
  }

  typeSearch(tipo){

    if(this.tipo.value == ''){
      this.listaPokemonsDividida = [];
      this.valuePage = 0;
      this.listarPokemons();
    }else{
      this.listaPokemonsDividida = [];
      let lista = this.pokemonService.getTypeCache(this.tipo.value);

      this.dividirLista(lista);
    }
  }

  ordenarMaior(){

    this.listaOrdenada = this.listaPokemons.sort((a, b) => (a.atk > b.atk) ? -1 : 1);
    this.dividirLista(this.listaOrdenada);
  }

  ordenarMenor(){

  }
}
