import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesDetailModalComponent } from './episodes-detail-modal.component';

describe('EpisodesDetailModalComponent', () => {
  let component: EpisodesDetailModalComponent;
  let fixture: ComponentFixture<EpisodesDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesDetailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
