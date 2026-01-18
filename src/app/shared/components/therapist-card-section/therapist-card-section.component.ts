import {
  Component,
  Inject,
  PLATFORM_ID,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TherapistCardComponent } from '../therapist-card/therapist-card.component';
import { UiButtonComponent } from "../../ui-button/ui-button.component";

@Component({
  selector: 'app-therapist-card-section',
  standalone: true,
  imports: [CommonModule, TherapistCardComponent, UiButtonComponent],
  templateUrl: './therapist-card-section.component.html',
  styleUrls: ['./therapist-card-section.component.scss'],
})
export class TherapistCardSectionComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  therapistList = [
    {
      image: '/assets/doremon.jpg',
      name: 'Doremon',
      title: 'Clinical Psychologist',
      location: 'Pilkhuwa, India',
      rating: 4.5,
      segment: ['Children', 'Couples'],
      expertise: ['Anxiety', 'Depression', 'Relationship Issues'],
    },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
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
    return Math.max(this.therapistList.length - this.cardsPerView, 0);
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
