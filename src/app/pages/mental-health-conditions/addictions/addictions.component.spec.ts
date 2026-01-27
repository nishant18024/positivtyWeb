import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddictionsComponent } from './addictions.component';

describe('AddictionsComponent', () => {
  let component: AddictionsComponent;
  let fixture: ComponentFixture<AddictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
