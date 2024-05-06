import { PokemonService } from 'src/app/services/pokemon.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { finalize } from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private PokemonService: PokemonService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.PokemonService.show() 
    return next.handle(req).pipe(
      finalize(()=> {
        setTimeout(() => {
          this.PokemonService.hide()
        }, 550);
      })
    );
  }
}