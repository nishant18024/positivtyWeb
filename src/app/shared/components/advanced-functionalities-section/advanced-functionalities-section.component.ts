import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-advanced-functionalities-section',
  imports: [CommonModule],
  templateUrl: './advanced-functionalities-section.component.html',
  styleUrl: './advanced-functionalities-section.component.scss'
})
export class AdvancedFunctionalitiesSectionComponent implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  cards = [
    {
      title: 'Dedicated Institutional Support',
      description: `Our team provides dedicated support to institutions,
      assisting with onboarding, training, and ongoing queries.
      Whether it’s technical troubleshooting or optimizing your
      program, we’re here to help every step of the way.`
    },
    {
      title: 'Analytics & Insights',
      description: `Gain actionable insights with advanced reporting
      tools that help administrators monitor engagement and
      program effectiveness in real time.`
    },
    {
      title: 'Administrative Control',
      description: `Manage users, track participation, and streamline
      mental wellness initiatives with centralized institutional tools.`
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}
