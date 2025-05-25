import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ICharacter } from '../characters.model.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input () character?:ICharacter;
@Output() onDetailClick:EventEmitter<number>= new EventEmitter<number>

showDetails(characterId: number): void {
  this.onDetailClick.emit(characterId);
}

noneImage(): string {
  return 'assets/images/futurama_background2.png'
}

}
