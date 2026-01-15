import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyCardSectionComponent } from './therapy-card-section.component';

describe('TherapyCardSectionComponent', () => {
  let component: TherapyCardSectionComponent;
  let fixture: ComponentFixture<TherapyCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapyCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
