import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor (
    private router: Router
    ){}

  getImages(): string{
    return 'assets/images/futurama_background.jpg';
  }

  navigateToCharacters(): void {
   // console.log('click en navegaToCharacters')
   this.router.navigate(['/characters']);
  }
}
