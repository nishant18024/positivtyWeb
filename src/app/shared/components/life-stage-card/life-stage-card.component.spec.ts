import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStageCardComponent } from './life-stage-card.component';

describe('LifeStageCardComponent', () => {
  let component: LifeStageCardComponent;
  let fixture: ComponentFixture<LifeStageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeStageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeStageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
