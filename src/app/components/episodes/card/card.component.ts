import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEpisodes } from '../episodes.model.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input () episode?:IEpisodes;
  @Output() onDetailClick:EventEmitter<number>= new EventEmitter<number>

  showDetails(id:number) : void {
    this.onDetailClick.emit(id);
  }
}
