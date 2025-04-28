import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/pages/error/error.component';
import { HomeComponent } from './shared/components/pages/home/home.component';
import { ListPokemonComponent } from './shared/components/pages/list-pokemon/list-pokemon.component';
import { ListLegendariesComponent } from './shared/components/pages/list-legendaries/list-legendaries.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pokedex',
    component: ListPokemonComponent
  },
  {
    path: 'legendaries',
    component: ListLegendariesComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
