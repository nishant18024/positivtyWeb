import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ServiceCardComponent } from "../../../shared/components/service-card/service-card.component";

@Component({
  selector: 'app-service-offers-section',
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './service-offers-section.component.html',
  styleUrl: './service-offers-section.component.scss'
})
export class ServiceOffersSectionComponent {

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
    return Math.max(this.serviceOfferList.length - this.cardsPerView, 0);
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




  serviceOfferList = [
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/anxiety-therapy.jpg',
      icon: 'ph-heart',
      title: 'Anxiety Therapy',
      description: 'Address core issues hindering your daily life with evidence-based strategies',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/family-therapy.png',
      icon: 'ph-identification-badge',
      title: 'Family Therapy',
      description: 'Navigate disagreements and strengthen relationships with expert guidance',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/corporate.png',
      icon: '',
      title: 'Corporate Partnerships',
      description: 'Enhance workforce producticity with mental health workshops and crisis support',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/teen-therapy.jpg',
      icon: ' ',
      title: 'Teen Therapy',
      description: 'Support your child’s mental health with rising anxiety, depression, and ADHD',
    },

  ]


}
