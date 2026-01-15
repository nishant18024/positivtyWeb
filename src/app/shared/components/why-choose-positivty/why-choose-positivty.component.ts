import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-why-choose-positivty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-positivty.component.html',
  styleUrls: ['./why-choose-positivty.component.scss'],
})
export class WhyChoosePositivtyComponent
  implements AfterViewInit, OnDestroy {
  cards = [
    {
      icon: 'fa-solid fa-award',
      title: 'Experienced Therapists',
      desc: `Choose either Female or Male Therapists who are experienced in their field of specialisation...`,
    },
    {
      icon: 'fa-solid fa-hand-pointer',
      title: 'Simple To Use',
      desc: `Positivty is designed with simplicity in mind. In four easy steps you can begin your first session...`,
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Secure & Confidential',
      desc: `All communications between you and the Therapist are encrypted and secure...`,
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Support',
      desc: `We are available to support you in case you experience any challenges...`,
    },
  ];


  currentIndex = 0;
  cardsPerView = 1;
  isSlider = true;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateView();
    window.addEventListener('resize', () => this.updateView());

    this.startAutoScroll();
  }

  updateView() {
    const width = window.innerWidth;

    if (width >= 1024) {
      this.isSlider = false;
      this.stopAutoScroll();
    } else if (width >= 768) {
      this.isSlider = true;
      this.cardsPerView = 2;
      this.startAutoScroll();
    } else {
      this.isSlider = true;
      this.cardsPerView = 1;
      this.startAutoScroll();
    }
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / this.cardsPerView)}%)`;
  }

  startAutoScroll() {
    this.stopAutoScroll();

    this.intervalId = setInterval(() => {
      const maxIndex = this.cards.length - this.cardsPerView;
      this.currentIndex =
        this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
    }, 4000);
  }

  stopAutoScroll() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }
}
