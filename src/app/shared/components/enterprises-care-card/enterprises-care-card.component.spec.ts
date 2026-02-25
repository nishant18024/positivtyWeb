import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesCareCardComponent } from './enterprises-care-card.component';

describe('EnterprisesCareCardComponent', () => {
  let component: EnterprisesCareCardComponent;
  let fixture: ComponentFixture<EnterprisesCareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterprisesCareCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterprisesCareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
