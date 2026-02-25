import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MentalHealthCardComponent, MentalHealthCard } from '../mental-health-card/mental-health-card.component';

@Component({
  selector: 'app-prioritize-student-mental-health',
  standalone: true,
  imports: [CommonModule, MentalHealthCardComponent],
  templateUrl: './prioritize-student-mental-health.component.html',
  styleUrl: './prioritize-student-mental-health.component.scss'
})
export class PrioritizeStudentMentalHealthComponent implements OnInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  currentIndex = 0;
  isTransitioning = false;
  private autoScrollInterval: ReturnType<typeof setInterval> | null = null;
  private transitionDuration = 300; // ms — must match Tailwind duration-300

  mentalHealthCards: MentalHealthCard[] = [
    {
      title: 'The Prevalence of Mental Health Challenges',
      points: [
        { text: '40% of students encounter mental health issues, with 1 in 5 facing serious mental disorders' },
        { text: '81% of Indian students cite studies, exams, and results as major sources of anxiety and stress' },
        { text: 'Mindfulness helps students focus and manage stress better' }
      ]
    },
    {
      title: 'Anxiety',
      points: [
        { text: 'Overthinking and fear of failure' },
        { text: 'Exam pressure and social comparison' }
      ]
    },
    {
      title: 'Depression',
      points: [
        { text: 'Loss of interest in activities' },
        { text: 'Persistent sadness and low energy' }
      ]
    },
    {
      title: 'Stress',
      points: [
        { text: 'Academic workload overload' },
        { text: 'Balancing studies and expectations' }
      ]
    }
  ];

  get currentCard(): MentalHealthCard {
    return this.mentalHealthCards[this.currentIndex];
  }

  // ------------------------
  // Lifecycle
  // ------------------------

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mentalHealthCards.length > 1) {
        this.startAutoScroll();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  // ------------------------
  // Navigation
  // ------------------------

  goTo(index: number): void {
    if (index === this.currentIndex) return;
    this.animateTransition(() => {
      this.currentIndex = index;
    });
    this.restartAutoScroll();
  }

  nextCard(): void {
    if (!this.mentalHealthCards.length) return;
    this.animateTransition(() => {
      this.currentIndex = (this.currentIndex + 1) % this.mentalHealthCards.length;
    });
  }

  prevCard(): void {
    if (!this.mentalHealthCards.length) return;
    this.animateTransition(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.mentalHealthCards.length) %
        this.mentalHealthCards.length;
    });
  }

  manualNext(): void {
    this.nextCard();
    this.restartAutoScroll();
  }

  manualPrev(): void {
    this.prevCard();
    this.restartAutoScroll();
  }

  // ------------------------
  // Fade Transition
  // ------------------------

  private animateTransition(updateFn: () => void): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    setTimeout(() => {
      updateFn();
      this.isTransitioning = false;
    }, this.transitionDuration);
  }

  // ------------------------
  // Auto Scroll
  // ------------------------

  startAutoScroll(): void {
    this.stopAutoScroll();
    this.autoScrollInterval = setInterval(() => {
      this.nextCard();
    }, 4000);
  }

  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  private restartAutoScroll(): void {
    this.startAutoScroll();
  }
}