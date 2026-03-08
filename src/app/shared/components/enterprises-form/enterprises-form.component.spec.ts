import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesFormComponent } from './enterprises-form.component';

describe('EnterprisesFormComponent', () => {
  let component: EnterprisesFormComponent;
  let fixture: ComponentFixture<EnterprisesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterprisesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterprisesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
