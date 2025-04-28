import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeSection: 'home' | 'pokedex' | 'legendaries' | 'documentation' = 'home';
  
  constructor(private router: Router) {
    this.validateRoute();
  }

  validateRoute() {
    const url = this.router.url;
    switch (url) {
      case '/home':
        this.activeSection = 'home';
        return

      case '/pokedex':
        this.activeSection = 'pokedex';
        return

      case '/legendaries':
        this.activeSection = 'legendaries';
        return
    }
  }
}
