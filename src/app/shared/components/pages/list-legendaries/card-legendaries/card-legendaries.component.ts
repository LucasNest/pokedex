import { Component, EventEmitter, Input, Output } from '@angular/core';
import { legendariesList } from 'src/app/shared/interfaces/legendaries';

@Component({
  selector: 'app-card-legendaries',
  templateUrl: './card-legendaries.component.html',
  styleUrls: ['./card-legendaries.component.css']
})
export class CardLegendariesComponent {
  @Input() legendary: legendariesList;
  @Output() onSelected = new EventEmitter<legendariesList>();

  selectLegendary(legendary: legendariesList) {
    this.onSelected.emit(legendary);
  }
}
