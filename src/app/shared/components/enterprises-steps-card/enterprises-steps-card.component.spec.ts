import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesStepsCardComponent } from './enterprises-steps-card.component';

describe('EnterprisesStepsCardComponent', () => {
  let component: EnterprisesStepsCardComponent;
  let fixture: ComponentFixture<EnterprisesStepsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterprisesStepsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterprisesStepsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
