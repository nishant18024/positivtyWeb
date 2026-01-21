import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTherapistCardComponent } from './professional-therapist-card.component';

describe('ProfessionalTherapistCardComponent', () => {
  let component: ProfessionalTherapistCardComponent;
  let fixture: ComponentFixture<ProfessionalTherapistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalTherapistCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalTherapistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
