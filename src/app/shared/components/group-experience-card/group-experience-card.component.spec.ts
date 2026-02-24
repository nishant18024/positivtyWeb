import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupExperienceCardComponent } from './group-experience-card.component';

describe('GroupExperienceCardComponent', () => {
  let component: GroupExperienceCardComponent;
  let fixture: ComponentFixture<GroupExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupExperienceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
