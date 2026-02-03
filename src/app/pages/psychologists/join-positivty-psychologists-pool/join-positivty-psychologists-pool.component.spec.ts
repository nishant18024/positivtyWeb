import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPositivtyPsychologistsPoolComponent } from './join-positivty-psychologists-pool.component';

describe('JoinPositivtyPsychologistsPoolComponent', () => {
  let component: JoinPositivtyPsychologistsPoolComponent;
  let fixture: ComponentFixture<JoinPositivtyPsychologistsPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinPositivtyPsychologistsPoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinPositivtyPsychologistsPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
