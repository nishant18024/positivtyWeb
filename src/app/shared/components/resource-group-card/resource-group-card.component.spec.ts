import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGroupCardComponent } from './resource-group-card.component';

describe('ResourceGroupCardComponent', () => {
  let component: ResourceGroupCardComponent;
  let fixture: ComponentFixture<ResourceGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceGroupCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
