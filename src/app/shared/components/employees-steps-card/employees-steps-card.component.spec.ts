import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesStepsCardComponent } from './employees-steps-card.component';

describe('EmployeesStepsCardComponent', () => {
  let component: EmployeesStepsCardComponent;
  let fixture: ComponentFixture<EmployeesStepsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesStepsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesStepsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
