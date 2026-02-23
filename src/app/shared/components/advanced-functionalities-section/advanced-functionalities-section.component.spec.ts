import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFunctionalitiesSectionComponent } from './advanced-functionalities-section.component';

describe('AdvancedFunctionalitiesSectionComponent', () => {
  let component: AdvancedFunctionalitiesSectionComponent;
  let fixture: ComponentFixture<AdvancedFunctionalitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFunctionalitiesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFunctionalitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
