import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrlPoke = 'https://pokeapi.co/api/v2';

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

  isLoading = new BehaviorSubject<boolean>(false);
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

  getTypeCache(nameType){
    let cache = JSON.parse(localStorage.getItem('pokemonCache')!);

    for (let i = 0; i < cache.length; i++) {
      if (cache[i].types[0].indexOf(nameType) > -1) {
        return cache[i];
      }
    
    }
    
    let returnPokes: any = [];

    returnPokes + cache.Filter(
      (pokemon) => pokemon.types[0].indexOf(nameType) > -1
    );

    return returnPokes;
  }
}
