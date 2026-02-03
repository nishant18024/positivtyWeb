import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPositivtyPsychologistsComponent } from './view-positivty-psychologists.component';

describe('ViewPositivtyPsychologistsComponent', () => {
  let component: ViewPositivtyPsychologistsComponent;
  let fixture: ComponentFixture<ViewPositivtyPsychologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPositivtyPsychologistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPositivtyPsychologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
