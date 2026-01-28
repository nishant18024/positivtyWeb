import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftASessionCardComponent } from './gift-a-session-card.component';

describe('GiftASessionCardComponent', () => {
  let component: GiftASessionCardComponent;
  let fixture: ComponentFixture<GiftASessionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftASessionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftASessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
