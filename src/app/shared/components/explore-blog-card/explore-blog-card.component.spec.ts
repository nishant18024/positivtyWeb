import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBlogCardComponent } from './explore-blog-card.component';

describe('ExploreBlogCardComponent', () => {
  let component: ExploreBlogCardComponent;
  let fixture: ComponentFixture<ExploreBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreBlogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
