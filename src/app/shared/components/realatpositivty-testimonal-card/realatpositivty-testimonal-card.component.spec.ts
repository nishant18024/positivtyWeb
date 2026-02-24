import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealatpositivtyTestimonalCardComponent } from './realatpositivty-testimonal-card.component';

describe('RealatpositivtyTestimonalCardComponent', () => {
  let component: RealatpositivtyTestimonalCardComponent;
  let fixture: ComponentFixture<RealatpositivtyTestimonalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealatpositivtyTestimonalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealatpositivtyTestimonalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
