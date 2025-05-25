import { SeasonService } from './season.service';
import { Component, OnInit } from '@angular/core';
import { ISeason } from './season.model.component';
import { CardComponent } from './card/card.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SeasonsDetailModalComponent } from '../shared/seasons-detail-modal/seasons-detail-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seasons',
  imports: [CardComponent, FormsModule],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.scss',
  providers: [DialogService]
})
export class SeasonsComponent implements OnInit {

  season : ISeason[] = [];
  page = 1;
  modalRef: DynamicDialogRef | undefined;
    search = "";
  
    constructor(
  private seasonservice: SeasonService,
  private dialogService: DialogService
    ){}
  ngOnInit(): void {
    this.getAllSeason()
  }
  getAllSeason(): void {
     this.seasonservice.getAllSeason(this.page).subscribe({
      next:(res)=>{
        this.season = res.body!.items;
        console.log ('holiss', this.season);
      }
     })
  }
  
  showDetails(id: number) : void {
     console.log('id: ', id);
            this.modalRef = this.dialogService.open(SeasonsDetailModalComponent, {
            data: {
              id: id
            },
            width: '50vw',
            showHeader: false,
            focusOnShow: false
      });
    
  }
  
  searchSeason(): void {
  if(this.search == ""){
    this.getAllSeason();
  } else{
    this.seasonservice.getSeason(this.search).subscribe({
      next: (res)=> {
        this.season = [];
        this.season.push(res.body!);
      },
      error: () => {
        this.season = [];
      }
    })
  }
 }
  

  }
  