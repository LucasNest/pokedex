import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: Map<string, string> = new Map()

  constructor() { }

  put(name: string, response: string){
    this.cache.set(name, response);
  }

  get(name: string){
    return this.cache.get(name);
  }

  clear(){
    this.cache.clear();
  }
}
