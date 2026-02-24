import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCommunityCardComponent } from './explore-community-card.component';

describe('ExploreCommunityCardComponent', () => {
  let component: ExploreCommunityCardComponent;
  let fixture: ComponentFixture<ExploreCommunityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCommunityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCommunityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
