import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }

  getPokemon(id?: number, name?: string) {
    return this.httpClient.get<any>(`${this.apiUrl}/pokemon/${id ?? name}`);
  }

  getSpecie(id?: number, nameSpecie?: string) {
    return this.httpClient.get<any>(`${this.apiUrl}/pokemon-species/${id ?? nameSpecie}`);
  }
}
