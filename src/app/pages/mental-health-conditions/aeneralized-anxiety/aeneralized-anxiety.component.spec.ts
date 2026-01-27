import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeneralizedAnxietyComponent } from './aeneralized-anxiety.component';

describe('AeneralizedAnxietyComponent', () => {
  let component: AeneralizedAnxietyComponent;
  let fixture: ComponentFixture<AeneralizedAnxietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeneralizedAnxietyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeneralizedAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
