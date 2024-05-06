import { PokemonService } from 'src/app/services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedex';

  pokemonCache: any = [];

  lendaryCache: any = [];

  i = 1;

  iLendary = 1;


  constructor(private pokemonService: PokemonService) {
    
    this.validateCache();
    this.validateCacheLendary();

  }

  validateCache(){
    if (localStorage.getItem('pokemonCache') == null) {
      this.createCache();
    }
    else{
      console.log('Cache já existe');
      
    }
  }

  validateCacheLendary(){
    if (localStorage.getItem('lendaryCache') == null) {
      this.createCacheLendary();
    }
    else{
      console.log('Cache já existe');
      
    }
  }


  createCache() {

    if (this.i > 800) {
      return;
    }
    this.pokemonService.getPokemon(this.i).subscribe((pokemon) => {

      let save = {
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

      this.setItemSafely('pokemonCache', JSON.stringify(this.pokemonCache));
      setTimeout(() => {
        this.i++;
        this.createCache();
      }, 20);
    });

  }

  createCacheLendary(){
    if( this.iLendary > 800){
      return;
    }
    this.pokemonService.getSpecie(this.iLendary).subscribe((pokemon) => {

      if(pokemon.is_legendary == true || pokemon.is_mythical == true){

        this.pokemonService.getPokemon(pokemon.id).subscribe((details) => {

          let save = {

            name: details.name,
            img: details.sprites.other.dream_world.front_default,
            hp: details.stats[0].base_stat,
            atk: details.stats[1].base_stat,
            def: details.stats[2].base_stat,
            spAtk: details.stats[3].base_stat,
            spDef: details.stats[4].base_stat,
            xp: details.base_experience

          };
          this.lendaryCache.push(save);
          this.setItemSafely('lendaryCache', JSON.stringify(this.lendaryCache));
          setTimeout(()=> {
            this.iLendary++;
            this.createCacheLendary();
          
          }, 20);  
        });
      }
      else{
        this.iLendary++;
        this.createCacheLendary();
      }
    });
  }

  setItemSafely(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      if (this.isQuotaExceeded(e)) {
        // Storage full
        console.log('Storage full', e);

        // Handle the storage full error
        // Maybe clear some old data or inform the user
      }
    }
  }

  isQuotaExceeded(e) {
    var quotaExceeded = false;
    if (e) {
      if (e.code) {
        switch (e.code) {
          case 22:
            quotaExceeded = true;
            break;
          case 1014:
            // Firefox
            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
              quotaExceeded = true;
            }
            break;
        }
      } else if (e.number === -2147024882) {
        // Internet Explorer 8
        quotaExceeded = true;
      }
    }
    return quotaExceeded;
  }

}
