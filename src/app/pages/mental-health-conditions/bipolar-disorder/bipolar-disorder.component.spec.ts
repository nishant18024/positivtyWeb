import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BipolarDisorderComponent } from './bipolar-disorder.component';

describe('BipolarDisorderComponent', () => {
  let component: BipolarDisorderComponent;
  let fixture: ComponentFixture<BipolarDisorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BipolarDisorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BipolarDisorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
