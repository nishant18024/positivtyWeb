import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisorderCardComponent } from './disorder-card.component';

describe('DisorderCardComponent', () => {
  let component: DisorderCardComponent;
  let fixture: ComponentFixture<DisorderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisorderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisorderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
