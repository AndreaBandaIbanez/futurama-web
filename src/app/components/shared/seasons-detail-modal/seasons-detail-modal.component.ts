import { Component } from '@angular/core';
import { ISeason } from '../../seasons/season.model.component';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SeasonService } from '../../seasons/season.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-seasons-detail-modal',
  imports: [ButtonModule],
  templateUrl: './seasons-detail-modal.component.html',
  styleUrl: './seasons-detail-modal.component.scss'
})
export class SeasonsDetailModalComponent {
  season?: ISeason;
  modalRef! : DynamicDialogRef;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private seasonService: SeasonService
  ){}

  ngOnInit(): void {
    if (this.config.data) {
      if (this.config.data.id){
        console.log('tengo el id! ->', this.config.data?.id);
        this.getSeason(this.config.data?.id);
      }
    }
  }
  getSeason(id: String): void{
    this.seasonService.getSeason(id).subscribe({
      next: (res) => {
        if (res.body){
          this.season = res.body;
          console.log('el episode ->' , this.season);
        }
      }
    })


  }
  close(): void {
    this.ref.close();
  }


}
