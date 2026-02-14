import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesCardComponent } from './values-card.component';

describe('ValuesCardComponent', () => {
  let component: ValuesCardComponent;
  let fixture: ComponentFixture<ValuesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
