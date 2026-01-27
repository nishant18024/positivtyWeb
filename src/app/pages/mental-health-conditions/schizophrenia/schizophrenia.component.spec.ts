import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchizophreniaComponent } from './schizophrenia.component';

describe('SchizophreniaComponent', () => {
  let component: SchizophreniaComponent;
  let fixture: ComponentFixture<SchizophreniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchizophreniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchizophreniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
