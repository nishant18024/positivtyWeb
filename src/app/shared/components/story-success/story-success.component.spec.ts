import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySuccessComponent } from './story-success.component';

describe('StorySuccessComponent', () => {
  let component: StorySuccessComponent;
  let fixture: ComponentFixture<StorySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
