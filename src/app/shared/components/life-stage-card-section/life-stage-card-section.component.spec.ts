import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStageCardSectionComponent } from './life-stage-card-section.component';

describe('LifeStageCardSectionComponent', () => {
  let component: LifeStageCardSectionComponent;
  let fixture: ComponentFixture<LifeStageCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeStageCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeStageCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
