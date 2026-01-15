import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoosePositivtyComponent } from './why-choose-positivty.component';

describe('WhyChoosePositivtyComponent', () => {
  let component: WhyChoosePositivtyComponent;
  let fixture: ComponentFixture<WhyChoosePositivtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChoosePositivtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoosePositivtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
