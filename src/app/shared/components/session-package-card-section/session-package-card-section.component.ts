import {
  Component,
  Inject,
  PLATFORM_ID,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SessionPackageCardComponent } from "../session-package-card/session-package-card.component";

@Component({
  selector: 'app-session-package-card-section',
  imports: [CommonModule, SessionPackageCardComponent],
  templateUrl: './session-package-card-section.component.html',
  styleUrl: './session-package-card-section.component.scss'
})
export class SessionPackageCardSectionComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  packageList = [
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
    {
      image: '/assets/doremon.jpg',
      rating: 4.5,
      title: 'Clinical Psychologist',
      name: 'Doremon',
      grade: 'masters',
      price: 21000,
      totalSession: 2,
      modeOfSession: "Via Video",
    },
  ];

  currentIndex = 0;
  cardsPerView = 1;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCardsPerView();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCardsPerView();
  }

  updateCardsPerView() {
    const w = window.innerWidth;

    if (w >= 1024) this.cardsPerView = 3;
    else if (w >= 768) this.cardsPerView = 2;
    else this.cardsPerView = 1;

    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  get maxIndex() {
    return Math.max(this.packageList.length - this.cardsPerView, 0);
  }

  get transformStyle() {
    const percent = (100 / this.cardsPerView) * this.currentIndex;
    return `translateX(-${percent}%)`;
  }

  next() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  goTo(i: number) {
    this.currentIndex = i;
  }

  get dots() {
    return Array(this.maxIndex + 1);
  }
}
