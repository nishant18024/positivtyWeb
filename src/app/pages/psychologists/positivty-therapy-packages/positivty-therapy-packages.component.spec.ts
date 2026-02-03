import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivtyTherapyPackagesComponent } from './positivty-therapy-packages.component';

describe('PositivtyTherapyPackagesComponent', () => {
  let component: PositivtyTherapyPackagesComponent;
  let fixture: ComponentFixture<PositivtyTherapyPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositivtyTherapyPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositivtyTherapyPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
