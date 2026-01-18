import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSessionComponent } from './gift-session.component';

describe('GiftSessionComponent', () => {
  let component: GiftSessionComponent;
  let fixture: ComponentFixture<GiftSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
