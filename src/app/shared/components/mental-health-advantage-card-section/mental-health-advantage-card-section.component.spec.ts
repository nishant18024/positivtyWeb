import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthAdvantageCardSectionComponent } from './mental-health-advantage-card-section.component';

describe('MentalHealthAdvantageCardSectionComponent', () => {
  let component: MentalHealthAdvantageCardSectionComponent;
  let fixture: ComponentFixture<MentalHealthAdvantageCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalHealthAdvantageCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalHealthAdvantageCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
