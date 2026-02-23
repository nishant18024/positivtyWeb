import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritizeStudentMentalHealthComponent } from './prioritize-student-mental-health.component';

describe('PrioritizeStudentMentalHealthComponent', () => {
  let component: PrioritizeStudentMentalHealthComponent;
  let fixture: ComponentFixture<PrioritizeStudentMentalHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioritizeStudentMentalHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioritizeStudentMentalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
