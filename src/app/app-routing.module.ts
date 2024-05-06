import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/pages/homepage/HomePage.component';
import { PokedexListPageComponent } from './componentes/pages/PokedexListPage/PokedexListPage.component';
import { PageLegenderiesComponent } from './componentes/pages/PageLegenderies/PageLegenderies.component';
import { ErroComponent } from './componentes/pages/erro/erro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'pokedex',
    component: PokedexListPageComponent
  },
  {
    path: 'Legenderies',
    component: PageLegenderiesComponent
  },
  {
    path: 'error',
    component: ErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
