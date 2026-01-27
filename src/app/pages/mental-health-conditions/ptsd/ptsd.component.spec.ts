import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsdComponent } from './ptsd.component';

describe('PtsdComponent', () => {
  let component: PtsdComponent;
  let fixture: ComponentFixture<PtsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtsdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
