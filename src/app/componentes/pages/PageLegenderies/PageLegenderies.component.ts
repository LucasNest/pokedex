import { PokemonService } from 'src/app/services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './PageLegenderies.component.html',
  styleUrls: ['./PageLegenderies.component.css']
})
export class PageLegenderiesComponent {

  listaLendary: any = [];
  listaLendaryDividida: any = [];
  listaLendaryStronger: any = [];
  listaLendaryStrongerDividida: any = [];
  listaLendaryWeaker: any = [];
  listaLendaryWeakerDividida: any = [];
  valuePage: any = 0;
  valuePageStronger: any = 0;
  valuePageWeaker: any = 0;
  clickDisableVoltar: boolean = false;
  clickDisableSeguir: boolean = false;
  clickStrongerDisableVoltar: boolean = false;
  clickStrongerDisableSeguir: boolean = false;
  clickWeakerDisableVoltar: boolean = false;
  clickWeakerDisableSeguir: boolean = false;

  lendarySelected: any = []
  lendaryStrongerSelected: any = []
  lendaryWeakerSelected: any = []

  nomeCard: any;
  imgCard: any;
  hp: any;
  atk: any;
  def: any;
  spAtk: any;
  spDef: any;
  xp: any;
  hpPorcentagem: any;
  xpPorcentagem: any;
  atkPorcentagem: any;
  defPorcentagem: any;
  spAtkPorcentagem: any;
  spDefPorcentagem: any;

  corte: any = 6;

  nomeCardStronger: any;
  imgCardStronger: any;
  hpStronger: any;
  atkStronger: any;
  defStronger: any;
  spAtkStronger: any;
  spDefStronger: any;
  xpStronger: any;
  hpPorcentagemStronger: any;
  xpPorcentagemStronger: any;
  atkPorcentagemStronger: any;
  defPorcentagemStronger: any;
  spAtkPorcentagemStronger: any;
  spDefPorcentagemStronger: any;

  nomeCardWeaker: any;
  imgCardWeaker: any;
  hpWeaker: any;
  atkWeaker: any;
  defWeaker: any;
  spAtkWeaker: any;
  spDefWeaker: any;
  xpWeaker: any;
  hpPorcentagemWeaker: any;
  xpPorcentagemWeaker: any;
  atkPorcentagemWeaker: any;
  defPorcentagemWeaker: any;
  spAtkPorcentagemWeaker: any;
  spDefPorcentagemWeaker: any;
  


  constructor(private pokemonService: PokemonService) { 
    // this.getPokemonList();
    this.listarLendarys();

  }

  ngOnInit(){
  } 

  listarLendarys() {

    this.listaLendary = JSON.parse(localStorage.getItem('lendaryCache')!);
    this.dividirLista(this.listaLendary);
    this.dividirListaStronger(this.listaLendary);
    this.dividirListaWeaker(this.listaLendary);
  }

  dividirLista(listaLendary) {

    this.selectLendary(this.listaLendary[0]);

    for (let i = 0; i < this.listaLendary.length; i = i + this.corte) {
      this.listaLendaryDividida.push(listaLendary.slice(i, i + this.corte));
    }

  }

  dividirListaStronger(listaLendary) {
    for( let i = 0; i < listaLendary.length; i++){
      if(listaLendary[i].atk > 100){
        this.listaLendaryStronger.push(listaLendary[i]);
      }

      if( i == listaLendary.length - 1){

        this.selectStrongerLendary(this.listaLendaryStronger[0]);

        for (let i = 0; i < this.listaLendaryStronger.length; i = i + this.corte) {
          this.listaLendaryStrongerDividida.push(this.listaLendaryStronger.slice(i, i + this.corte));
        }
      }
  }
  }
  dividirListaWeaker(listaLendary) {
    for( let i = 0; i < listaLendary.length; i++){
      if(listaLendary[i].atk < 100){
        this.listaLendaryWeaker.push(listaLendary[i]);
      }
      if( i == listaLendary.length - 1){

        this.selectWeakerLendary(this.listaLendaryWeaker[0]);

        for (let i = 0; i < this.listaLendaryWeaker.length; i = i + this.corte) {
          this.listaLendaryWeakerDividida.push(this.listaLendaryWeaker.slice(i, i + this.corte));
        }
      }
  }
  }
  pageProximo() {

    if (this.valuePage < this.listaLendaryDividida.length - 1) {
      this.valuePage = this.valuePage + 1;
      this.clickDisableVoltar = false;
    } else this.clickDisableSeguir = true;

  }

  pageAnterior() {

    if (this.valuePage > 0) {
      this.valuePage = this.valuePage - 1;
      this.clickDisableSeguir = false;
    } else this.clickDisableVoltar = true;

  }
  pageProximoStronger() {

    if (this.valuePageStronger < this.listaLendaryStrongerDividida.length - 1) {
      this.valuePageStronger = this.valuePageStronger + 1;
      this.clickStrongerDisableVoltar = false;
    } else this.clickStrongerDisableSeguir = true;

  }

  pageAnteriorStronger() {

    if (this.valuePageStronger > 0) {
      this.valuePageStronger = this.valuePageStronger - 1;
      this.clickStrongerDisableSeguir = false;
    } else this.clickStrongerDisableVoltar = true;

  }
  pageProximoWeaker() {

    if (this.valuePageWeaker < this.listaLendaryWeakerDividida.length - 1) {
      this.valuePageWeaker = this.valuePageWeaker + 1;
      this.clickWeakerDisableVoltar = false;
    } else this.clickWeakerDisableSeguir = true;

  }

  pageAnteriorWeaker() {

    if (this.valuePageWeaker > 0) {
      this.valuePageWeaker = this.valuePageWeaker - 1;
      this.clickWeakerDisableSeguir = false;
    } else this.clickWeakerDisableVoltar = true;

  }

  selectLendary(lendary) {

    this.lendarySelected = lendary;

    this.nomeCard = this.lendarySelected.name;
    this.imgCard = this.lendarySelected.img;
    this.hp = this.lendarySelected.hp;
    this.atk = this.lendarySelected.atk;
    this.def = this.lendarySelected.def;
    this.spAtk = this.lendarySelected.spAtk;
    this.spDef = this.lendarySelected.spDef;
    this.xp = this.lendarySelected.xp;
    this.xpPorcentagem = (this.xp * 100) / 340;
    this.hpPorcentagem = (this.hp * 100) / 255;
    this.atkPorcentagem = (this.atk * 100) / 190;
    this.defPorcentagem = (this.def * 100) / 230;
    this.spAtkPorcentagem = (this.spAtk * 100) / 194;
    this.spDefPorcentagem = (this.spDef * 100) / 230;

    this.lendarySelected = [];

  }

  selectStrongerLendary(lendaryStronger) {

    this.lendaryStrongerSelected = lendaryStronger;

    this.nomeCardStronger = this.lendaryStrongerSelected.name;
    this.imgCardStronger = this.lendaryStrongerSelected.img;
    this.hpStronger = this.lendaryStrongerSelected.hp;
    this.atkStronger = this.lendaryStrongerSelected.atk;
    this.defStronger = this.lendaryStrongerSelected.def;
    this.spAtkStronger = this.lendaryStrongerSelected.spAtk;
    this.spDefStronger = this.lendaryStrongerSelected.spDef;
    this.xpStronger = this.lendaryStrongerSelected.xp;
    this.xpPorcentagemStronger = (this.xp * 100) / 340;
    this.hpPorcentagemStronger = (this.hp * 100) / 255;
    this.atkPorcentagemStronger = (this.atk * 100) / 190;
    this.defPorcentagemStronger = (this.def * 100) / 230;
    this.spAtkPorcentagemStronger = (this.spAtk * 100) / 194;
    this.spDefPorcentagemStronger = (this.spDef * 100) / 230;

    this.lendaryStrongerSelected = [];
  }
  
  selectWeakerLendary(lendary) {
      
      this.lendaryWeakerSelected = lendary;
  
      this.nomeCardWeaker = this.lendaryWeakerSelected.name;
      this.imgCardWeaker = this.lendaryWeakerSelected.img;
      this.hpWeaker = this.lendaryWeakerSelected.hp;
      this.atkWeaker = this.lendaryWeakerSelected.atk;
      this.defWeaker = this.lendaryWeakerSelected.def;
      this.spAtkWeaker = this.lendaryWeakerSelected.spAtk;
      this.spDefWeaker = this.lendaryWeakerSelected.spDef;
      this.xpWeaker = this.lendaryWeakerSelected.xp;
      this.xpPorcentagemWeaker = (this.xp * 100) / 340;
      this.hpPorcentagemWeaker = (this.hp * 100) / 255;
      this.atkPorcentagemWeaker = (this.atk * 100) / 190;
      this.defPorcentagemWeaker = (this.def * 100) / 230;
      this.spAtkPorcentagemWeaker = (this.spAtk * 100) / 194;
      this.spDefPorcentagemWeaker = (this.spDef * 100) / 230;
  
      this.lendaryWeakerSelected = [];
  }
}