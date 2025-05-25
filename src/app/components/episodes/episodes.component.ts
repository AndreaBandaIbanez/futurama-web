import { EpisodesService } from './episodes.service';
import { Component, OnInit } from '@angular/core';
import { IEpisodes } from './episodes.model.component';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { EpisodesDetailModalComponent } from '../shared/episodes-detail-modal/episodes-detail-modal.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-episodes',
  imports: [CardComponent, FormsModule, NgbPaginationModule],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
  providers: [DialogService]
})
export class EpisodesComponent implements OnInit {

  episodes : IEpisodes[] = [];
  currentPage: number = 1;
  page = 1;
  pageSize: number = 50;
  totalEpisodes: number = 150;
  modalRef: DynamicDialogRef | undefined;
  search = "";


    constructor(
  private episodesService: EpisodesService,
  private dialogService: DialogService
    ){}
  ngOnInit(): void {
    this.getAllEpisodes()
  }
 
  
  showDetails(id: number) : void {
     console.log('id: ', id);
        this.modalRef = this.dialogService.open(EpisodesDetailModalComponent, {
        data: {
          id: id
        },
        width: '50vw',
        showHeader: false,
        focusOnShow: false
  });

 }

 getAllEpisodes(): void {
  this.episodesService.getAllEpisodes(this.currentPage).subscribe({
   next:(res)=>{
     this.episodes = res.body!.items;
     this.currentPage = res.body!.page;
    
     console.log ('Personajes', this.episodes);
     console.log ('total de personajes', this.episodes);
   }
  })
}

 onPageChange(): void {
  //this.currentPage =  this.currentPage+1;
  this.getAllEpisodes();
console.log('cambio de pag ->' , this.currentPage);
console.log('pers', this.pageSize);
console.log('chars', this.totalEpisodes);
 }

 
 searchEpisod(): void {
  if(this.search == ""){
    this.currentPage = 1;
    this.pageSize = 50;
    this.totalEpisodes = 150;
    this.getAllEpisodes();
  } else{
    this.episodesService.getEpisode(this.search).subscribe({
      next: (res)=> {
        this.episodes = [];
        this.episodes.push(res.body!);
        this.currentPage = 1;
        this.pageSize = 1;
        this.totalEpisodes = 1;
        console.log ('Episodes', this.episodes);
        console.log ('total de personajes', this.episodes);
      },
      error: () => {
        this.episodes = [];
      }
    })
  }
 }
  
}
