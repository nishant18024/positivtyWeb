import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptiveBehaviorComponent } from './disruptive-behavior.component';

describe('DisruptiveBehaviorComponent', () => {
  let component: DisruptiveBehaviorComponent;
  let fixture: ComponentFixture<DisruptiveBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisruptiveBehaviorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisruptiveBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
