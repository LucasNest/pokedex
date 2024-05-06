import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{

  isLoading: boolean = false;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit() {
    this.PokemonService.getLoading().subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }

}
