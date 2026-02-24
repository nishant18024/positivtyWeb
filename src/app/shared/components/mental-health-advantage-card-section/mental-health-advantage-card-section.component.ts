import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MentalHealthAdvantageCardComponent } from "../mental-health-advantage-card/mental-health-advantage-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mental-health-advantage-card-section',
  imports: [MentalHealthAdvantageCardComponent, CommonModule],
  templateUrl: './mental-health-advantage-card-section.component.html',
  styleUrl: './mental-health-advantage-card-section.component.scss'
})
export class MentalHealthAdvantageCardSectionComponent implements OnInit, OnDestroy {
  advantagesCards = [
    {
      title: 'Holistic Personal Development',
      desc: "Mental health programs help students develop resilience, coping mechanisms, and emotional intelligence. These skills don't just support them academically - they become lifelong assets for personal and professional growth."
    },
    {
      title: 'Effective Crisis Prevention',
      desc: 'Addressing mental health proactively reduces the risk of crises, such as self-harm and suicide, by promoting understanding and offering timely support. Prevention ensures a safer, healthier environment for all.'
    },
    {
      title: 'Healthier Community Connections',
      desc: 'Schools and universities are vital hubs where students develop essential social skills and relationships. Mentally healthy students are more likely to engage in community activities, build meaningful connections, and contribute positively to society.'
    },
    {
      title: 'Improved Retention Rates',
      desc: 'Institutions that prioritize mental health see lower dropout rates, as students are more likely to stay and succeed when they receive the support they need. This stability benefits both the students and the institution, fostering a dedicated community.'
    },
    {
      title: 'Positive Learning Environment',
      desc: 'A focus on mental health fosters an inclusive and supportive learning environment. This atmosphere encourages collaboration and understanding among students, leading to stronger relationships and a more cohesive school culture.'
    },
    {
      title: 'Higher Graduation Rates',
      desc: 'Students who have access to mental health resources are more likely to complete their programs successfully. By promoting well-being, institutions contribute to higher graduation rates, ensuring that their graduates are equipped for future challenges.'
    },
    {
      title: 'Academic Excellence',
      desc: 'Supporting mental health drives better grades and higher retention rates. Studies reveal that 66% of college students who accessed counselling services reported improvements in their academic performance.'
    },
    {
      title: 'Elevated Institution Reputation',
      desc: 'Institutions with a strong focus on mental health build a reputation for care and excellence. This not only attracts prospective students but also positions the institution as a leader in fostering successful career-ready individuals.'
    },
    {
      title: 'Holistic Personal Development',
      desc: "Mental health programs help students develop resilience, coping mechanisms, and emotional intelligence. These skills don't just support them academically - they become lifelong assets for personal and professional growth."
    },
    {
      title: 'Effective Crisis Prevention',
      desc: 'Addressing mental health proactively reduces the risk of crises, such as self-harm and suicide, by promoting understanding and offering timely support. Prevention ensures a safer, healthier environment for all.'
    },
    {
      title: 'Healthier Community Connections',
      desc: 'Schools and universities are vital hubs where students develop essential social skills and relationships. Mentally healthy students are more likely to engage in community activities, build meaningful connections, and contribute positively to society.'
    },
  ];

  currentIndex = 0;
  cardsToShow = 3;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.updateCardsToShow();
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  @HostListener('window:resize')
  updateCardsToShow() {
    // Guard against SSR - window doesn't exist on the server
    if (!isPlatformBrowser(this.platformId)) return;

    const width = window.innerWidth;

    if (width < 768) {
      this.cardsToShow = 1;
    } else if (width < 1024) {
      this.cardsToShow = 2;
    } else {
      this.cardsToShow = 3;
    }
  }

  get currentTranslate() {
    return (this.currentIndex * (100 / this.cardsToShow));
  }

  next() {
    if (this.currentIndex < this.advantagesCards.length - this.cardsToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.advantagesCards.length - this.cardsToShow;
    }
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }
}