import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftASessionComponent } from './gift-a-session.component';

describe('GiftASessionComponent', () => {
  let component: GiftASessionComponent;
  let fixture: ComponentFixture<GiftASessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftASessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftASessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
