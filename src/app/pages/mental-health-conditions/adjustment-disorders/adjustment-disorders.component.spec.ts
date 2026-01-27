import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentDisordersComponent } from './adjustment-disorders.component';

describe('AdjustmentDisordersComponent', () => {
  let component: AdjustmentDisordersComponent;
  let fixture: ComponentFixture<AdjustmentDisordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjustmentDisordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustmentDisordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
