import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatingDisordersComponent } from './eating-disorders.component';

describe('EatingDisordersComponent', () => {
  let component: EatingDisordersComponent;
  let fixture: ComponentFixture<EatingDisordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatingDisordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatingDisordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
