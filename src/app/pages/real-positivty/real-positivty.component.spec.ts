import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPositivtyComponent } from './real-positivty.component';

describe('RealPositivtyComponent', () => {
  let component: RealPositivtyComponent;
  let fixture: ComponentFixture<RealPositivtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealPositivtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealPositivtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
