import { Component } from '@angular/core';
import { IEpisodes } from '../../episodes/episodes.model.component';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EpisodesService } from '../../episodes/episodes.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-episodes-detail-modal',
  imports: [ButtonModule],
  templateUrl: './episodes-detail-modal.component.html',
  styleUrl: './episodes-detail-modal.component.scss'
})
export class EpisodesDetailModalComponent {
 episode?: IEpisodes;
  modalRef! : DynamicDialogRef;
  
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private episodeService: EpisodesService
  ){}

  ngOnInit(): void {
    if (this.config.data) {
      if (this.config.data.id){
        console.log('tengo el id! ->', this.config.data?.id);
        this.getEpisode(this.config.data?.id);
      }
    }
  }
  getEpisode(id: String): void{
    this.episodeService.getEpisode(id).subscribe({
      next: (res) => {
        if (res.body){
          this.episode = res.body;
          console.log('el episode ->' , this.episode);
        }
      }
    })


  }
  close(): void {
    this.ref.close();
  }
}
