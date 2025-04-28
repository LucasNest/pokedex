import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModule } from './error/error.module';
import { HomeModule } from './home/home.module';
import { ListPokemonModule } from './list-pokemon/list-pokemon.module';
import { ListLegendariesModule } from './list-legendaries/list-legendaries.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorModule,
    HomeModule,
    ListPokemonModule,
    ListLegendariesModule
  ]
})
export class PagesModule { }
