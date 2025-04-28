import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLegendariesComponent } from './list-legendaries.component';
import { HeaderModule } from '../../header/header.module';
import { CardLegendariesComponent } from './card-legendaries/card-legendaries.component';



@NgModule({
  declarations: [
    ListLegendariesComponent,
    CardLegendariesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    ListLegendariesComponent
  ]
})
export class ListLegendariesModule { }
