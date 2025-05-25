import { NgIf } from '@angular/common';
import { ICharacter } from './characters.model.component';
import { CharactersService } from './characters.service';
import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CharacterDetailModalComponent } from '../shared/character-detail-modal/character-detail-modal.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters',
  imports: [NgbPaginationModule, CardComponent, FormsModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  providers: [DialogService]
  
})
export class CharactersComponent implements OnInit {

characters : ICharacter[] = [];
currentPage: number = 1;
pageSize: number = 0;
totalCharacters: number = 0;
modalRef: DynamicDialogRef | undefined;
search = "";

constructor(
private charactersService: CharactersService,
private dialogService: DialogService 
  ){}
  
ngOnInit(): void {
  this.getAllCharacters()
}
getAllCharacters(): void {
   this.charactersService.getAllCharacters(this.currentPage).subscribe({
    next:(res)=>{
      this.characters = res.body!.items;
      this.currentPage = res.body!.page;
      this.pageSize = res.body!.size;
      this.totalCharacters = res.body!.total;
      console.log ('Personajes', this.characters);
      console.log ('total de personajes', this.characters);
    }
   })
}


noneImage(): string {
  return 'assets/images/futurama_background2.png'
}

  onPageChange(): void {
    if(this.search === ''){
    this.getAllCharacters();
    }else {
      this.getSearchCharacters();
    }
  console.log('cambio de pag ->' , this.currentPage);
  console.log('pers', this.pageSize);
  console.log('chars', this.totalCharacters);
   }
   
  

   showDetails(characterId: number): void {  
    console.log('id: ', characterId);
    this.modalRef = this.dialogService.open(CharacterDetailModalComponent, {
    data: {
      id: characterId
    },
    width: '50vw',
    showHeader: false,
    focusOnShow: false,
    });
   }

   searchChar(): void {
    if(this.search == ""){
      this.currentPage = 1;
      this.pageSize = 0;
      this.totalCharacters = 0;
      this.getAllCharacters();
    } else{
      this.currentPage = 1;
      this.getSearchCharacters();
        }
   }
getSearchCharacters(): void {
this.charactersService.getSearchCharacters(this.currentPage, this.search).subscribe({
        next: (res)=> {
          
          this.characters = res.body!.items;
          this.currentPage = res.body!.page;
          this.pageSize = res.body!.size;
          this.totalCharacters = res.body!.total;
          console.log ('Personajes', this.characters);
          console.log ('total de personajes', this.characters);
    }
 })
        }
}
