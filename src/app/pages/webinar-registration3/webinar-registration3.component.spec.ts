import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarRegistration3Component } from './webinar-registration3.component';

describe('WebinarRegistration3Component', () => {
  let component: WebinarRegistration3Component;
  let fixture: ComponentFixture<WebinarRegistration3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarRegistration3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarRegistration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
