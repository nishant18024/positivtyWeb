import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruggleCardComponent } from './struggle-card.component';

describe('StruggleCardComponent', () => {
  let component: StruggleCardComponent;
  let fixture: ComponentFixture<StruggleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StruggleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StruggleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
