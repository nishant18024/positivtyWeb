import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistCardSectionComponent } from './therapist-card-section.component';

describe('TherapistCardSectionComponent', () => {
  let component: TherapistCardSectionComponent;
  let fixture: ComponentFixture<TherapistCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapistCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapistCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
