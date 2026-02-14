import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFeatureCardComponent } from './work-feature-card.component';

describe('WorkFeatureCardComponent', () => {
  let component: WorkFeatureCardComponent;
  let fixture: ComponentFixture<WorkFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFeatureCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
