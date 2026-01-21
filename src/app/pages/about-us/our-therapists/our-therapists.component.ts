import { CommonModule, isPlatformBrowser, } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { ProfessionalTherapistCardComponent } from "../../../shared/components/professional-therapist-card/professional-therapist-card.component";

@Component({
  selector: 'app-our-therapists',
  imports: [CommonModule, ProfessionalTherapistCardComponent],
  templateUrl: './our-therapists.component.html',
  styleUrl: './our-therapists.component.scss'
})
export class OurTherapistsComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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

  therapistList = [
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'simran ',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'sakshi',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'simran',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'sakshi',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'simran',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      name: 'sakshi',
    },
  ]
}
