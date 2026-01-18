import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPackageCardSectionComponent } from './session-package-card-section.component';

describe('SessionPackageCardSectionComponent', () => {
  let component: SessionPackageCardSectionComponent;
  let fixture: ComponentFixture<SessionPackageCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionPackageCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionPackageCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
