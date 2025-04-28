import { Component } from '@angular/core';
import { PokeApiService } from './shared/services/poke-api/poke-api.service';
import { PokemonList } from './shared/interfaces/pokemon';
import { legendariesList } from './shared/interfaces/legendaries';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemonCache: PokemonList[] = [];
  LegendaryCache: legendariesList[] = [];

  isLoading: boolean = false;

  constructor(private pokeApiService: PokeApiService) {
    this.validateCache();
  }

  validateCache() {
    if (localStorage.getItem('pokemons') == null && localStorage.getItem('legendaries') == null) {
      this.createCache();
    }
    else {
      return
    }
  }

  createCache() {
    this.isLoading = true;
    const requests = [];

    for (let i = 1; i <= 151; i++) {
      requests.push(
        forkJoin({
          pokemon: this.pokeApiService.getPokemon(i),
          species: this.pokeApiService.getSpecie(i)
        })
      );
    }

    forkJoin(requests).subscribe(results => {
      results.forEach(({ pokemon, species }) => {
        const save: PokemonList = {
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.sprites.other.dream_world.front_default,
          hp: pokemon.stats[0].base_stat,
          atk: pokemon.stats[1].base_stat,
          def: pokemon.stats[2].base_stat,
          spAtk: pokemon.stats[3].base_stat,
          spDef: pokemon.stats[4].base_stat,
          xp: pokemon.base_experience,
          type: pokemon.types,
          abilities: pokemon.abilities
        };

        this.pokemonCache.push(save);

        if (species.is_legendary || species.is_mythical) {
          const legendarySave: legendariesList = {
            name: pokemon.name,
            img: pokemon.sprites.other.dream_world.front_default,
            hp: pokemon.stats[0].base_stat,
            atk: pokemon.stats[1].base_stat,
            def: pokemon.stats[2].base_stat,
            spAtk: pokemon.stats[3].base_stat,
            spDef: pokemon.stats[4].base_stat,
            xp: pokemon.base_experience
          };

          this.LegendaryCache.push(legendarySave);
        }
      });

      localStorage.setItem('pokemons', JSON.stringify(this.pokemonCache));
      localStorage.setItem('legendaries', JSON.stringify(this.LegendaryCache));
      this.isLoading = false;
    });
  }

}
