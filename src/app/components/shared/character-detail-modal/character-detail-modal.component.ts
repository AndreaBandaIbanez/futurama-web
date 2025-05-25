import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { from } from 'rxjs';
import { CharactersService } from '../../characters/characters.service';
import { ICharacter } from '../../characters/characters.model.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-character-detail-modal',
  imports: [ButtonModule,  NgIf],
templateUrl: './character-detail-modal.component.html',
  styleUrl: './character-detail-modal.component.scss'
})
export class CharacterDetailModalComponent implements OnInit{

  character?: ICharacter;
  modalRef! : DynamicDialogRef;
  
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private CharactersService: CharactersService
  ){}

  ngOnInit(): void {
    if (this.config.data) {
      if (this.config.data.id){
        console.log('tengo el id! ->', this.config.data?.id);
        this.getCharacter(this.config.data?.id);
      }
    }
  }
  getCharacter(id: number): void{
    this.CharactersService.getCharacterById(id).subscribe({
      next: (res) => {
        if (res.body){
          this.character = res.body;
          console.log('el character ->' , this.character);
        }
      }
    })


  }
  close(): void {
    this.ref.close();
  }
}