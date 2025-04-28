import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { HeaderModule } from '../../header/header.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ModalCardComponent } from './modal-card/modal-card.component';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
    ListPokemonComponent,
    CardComponent,
    ModalCardComponent
  ],
  imports: [
    CommonModule, 
    HeaderModule,
    FormsModule,
    DialogModule,
    MultiSelectModule
  ],
  exports: [
    ListPokemonComponent
  ]
})
export class ListPokemonModule { }
