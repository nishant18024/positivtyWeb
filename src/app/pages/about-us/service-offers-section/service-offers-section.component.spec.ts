import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOffersSectionComponent } from './service-offers-section.component';

describe('ServiceOffersSectionComponent', () => {
  let component: ServiceOffersSectionComponent;
  let fixture: ComponentFixture<ServiceOffersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOffersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
