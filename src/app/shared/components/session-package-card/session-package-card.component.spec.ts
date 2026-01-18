import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPackageCardComponent } from './session-package-card.component';

describe('SessionPackageCardComponent', () => {
  let component: SessionPackageCardComponent;
  let fixture: ComponentFixture<SessionPackageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionPackageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
