import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() nome : any;
  @Input() img : any;
  @Input() hp : any;
  @Input() atk : any;
  @Input() def : any;
  @Input() spAtk : any;
  @Input() spDef : any;
  @Input() abilities : any;
  @Input() type1 : any;
  @Input() xp : any;
  @Input() hpPorcentagem : any;
  @Input() xpPorcentagem : any;

  @Output() closeModalEvent = new EventEmitter();


  closeModal(){
    this.closeModalEvent.emit();
  }

    constructor() { }
  
    ngOnInit(): void {

      
      
    }

}
