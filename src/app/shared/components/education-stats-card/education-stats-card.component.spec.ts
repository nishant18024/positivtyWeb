import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationStatsCardComponent } from './education-stats-card.component';

describe('EducationStatsCardComponent', () => {
  let component: EducationStatsCardComponent;
  let fixture: ComponentFixture<EducationStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationStatsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
