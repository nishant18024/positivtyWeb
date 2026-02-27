import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarRegistration2Component } from './webinar-registration2.component';

describe('WebinarRegistration2Component', () => {
  let component: WebinarRegistration2Component;
  let fixture: ComponentFixture<WebinarRegistration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarRegistration2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarRegistration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
