import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePlanCardComponent } from './package-plan-card.component';

describe('PackagePlanCardComponent', () => {
  let component: PackagePlanCardComponent;
  let fixture: ComponentFixture<PackagePlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagePlanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
