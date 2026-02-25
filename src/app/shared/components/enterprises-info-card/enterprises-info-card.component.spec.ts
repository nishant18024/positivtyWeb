import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesInfoCardComponent } from './enterprises-info-card.component';

describe('EnterprisesInfoCardComponent', () => {
  let component: EnterprisesInfoCardComponent;
  let fixture: ComponentFixture<EnterprisesInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterprisesInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterprisesInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
