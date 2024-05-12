import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrlPoke = 'https://pokeapi.co/api/v2';
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getPokemon(name) {
    return this.http.get<any>(`${this.apiUrlPoke}/pokemon/${name}`);
  }

  getSpecie(nameSpecie) {
    return this.http.get<any>(
      `${this.apiUrlPoke}/pokemon-species/${nameSpecie}`
    );
  }

  getPokemonType(type) {
    return this.http.get<any>(`${this.apiUrlPoke}/type/${type}`);
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  getLoading() {
    return this.isLoading.asObservable();
  }

  getPokemonCache(nomePokemon) {
    let cache = JSON.parse(localStorage.getItem('pokemonCache')!);

    let returnPoke: any = [];

    returnPoke = cache.filter(
      (pokemon) => pokemon.name.indexOf(nomePokemon) > -1
    );

    return returnPoke;
  }

  getTypeCache(typesArray) {
    let cache = JSON.parse(localStorage.getItem('pokemonCache')!);
    let returnPokes: any = [];

    returnPokes = cache.filter((pokemon) => {
      return typesArray.every((type) => {
        return pokemon.type
          .map((pokemonType) => pokemonType.type.name)
          .includes(type);
      });
    });

    return returnPokes;
  }

}
