import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTherapistsComponent } from './our-therapists.component';

describe('OurTherapistsComponent', () => {
  let component: OurTherapistsComponent;
  let fixture: ComponentFixture<OurTherapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTherapistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
