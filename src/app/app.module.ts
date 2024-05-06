import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HomePageComponent} from './componentes/pages/homepage/HomePage.component';
import { PokedexListPageComponent } from './componentes/pages/PokedexListPage/PokedexListPage.component';
import { ErroComponent } from './componentes/pages/erro/erro.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PageLegenderiesComponent} from './componentes/pages/PageLegenderies/PageLegenderies.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './services/loader.interceptor';
import { LoaderComponent } from './componentes/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomePageComponent,
    PokedexListPageComponent,
    ErroComponent,
    RodapeComponent,
    PageLegenderiesComponent,
    ModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
