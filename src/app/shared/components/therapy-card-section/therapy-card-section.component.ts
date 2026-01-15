import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TherapyCardComponent } from '../therapy-card/therapy-card.component';

@Component({
  selector: 'app-therapy-card-section',
  standalone: true,
  imports: [CommonModule, TherapyCardComponent],
  templateUrl: './therapy-card-section.component.html',
  styleUrl: './therapy-card-section.component.scss',
})
export class TherapyCardSectionComponent implements AfterViewInit {
  therapyList = [
    {
      image: '/assets/doremon.jpg',
      title: 'Dialectical Behaviour Therapy (DBT)',
      description:
        'Focuses on managing emotions and improving interpersonal relationships effectively.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Interpersonal Therapy (IPT)',
      description:
        'Addresses personal conflicts and improves communication for healthier connections.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Psychodynamic Therapy (PT)',
      description:
        'Explores unconscious feelings to resolve inner conflicts and promote emotional growth.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Cognitive Behaviour Therapy (CBT)',
      description: 'Helps change negative thinking patterns.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Acceptance Commitment Therapy (ACT)',
      description: 'Encourages psychological flexibility.',
    },
  ];

  currentIndex = 0;
  cardsPerView = 3;
  maxIndex = 0;
  dots: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.updateView();

    window.addEventListener('resize', () => {
      this.updateView();
    });
  }

  updateView() {
    if (!isPlatformBrowser(this.platformId)) return;

    const width = window.innerWidth;

    if (width < 768) {
      this.cardsPerView = 1; // mobile
    } else if (width < 1024) {
      this.cardsPerView = 2; // tablet
    } else {
      this.cardsPerView = 3; // desktop
    }

    this.maxIndex = this.therapyList.length - this.cardsPerView;

    const totalDots = Math.ceil(
      this.therapyList.length / this.cardsPerView
    );
    this.dots = Array(totalDots).fill(0);

    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / this.cardsPerView)}%)`;
  }

  next() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  goTo(i: number) {
    this.currentIndex = i * this.cardsPerView;
  }
}
