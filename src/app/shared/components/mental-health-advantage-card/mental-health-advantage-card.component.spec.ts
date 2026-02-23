import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthAdvantageCardComponent } from './mental-health-advantage-card.component';

describe('MentalHealthAdvantageCardComponent', () => {
  let component: MentalHealthAdvantageCardComponent;
  let fixture: ComponentFixture<MentalHealthAdvantageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalHealthAdvantageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalHealthAdvantageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
