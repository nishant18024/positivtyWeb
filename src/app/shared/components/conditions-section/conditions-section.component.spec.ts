import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsSectionComponent } from './conditions-section.component';

describe('ConditionsSectionComponent', () => {
  let component: ConditionsSectionComponent;
  let fixture: ComponentFixture<ConditionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
