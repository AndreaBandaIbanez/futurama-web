import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISeason } from '../season.model.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input () season?:ISeason;
  @Output() onDetailClick:EventEmitter<number>= new EventEmitter<number>

  showDetails(id:number) : void {
    this.onDetailClick.emit(id);
  }
  
}
