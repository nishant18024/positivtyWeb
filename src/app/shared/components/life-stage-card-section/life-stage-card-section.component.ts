import { Component } from '@angular/core';
import { LifeStageCardComponent } from "../life-stage-card/life-stage-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-stage-card-section',
  imports: [CommonModule, LifeStageCardComponent],
  templateUrl: './life-stage-card-section.component.html',
  styleUrl: './life-stage-card-section.component.scss'
})
export class LifeStageCardSectionComponent {
  lifeStageList = [
    {
      image: '/assets/doremon.jpg',
      title: 'Early in Career',
      description:
        'Adapting to responsibilities and professional settings may lead to anxiety disorders, stress, or adjustment disorders in young professionals.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Mid Career',
      description:
        'Balancing work and personal life, leadership stress, and burnout are common challenges at this stage.',
    },
    {
      image: '/assets/doremon.jpg',
      title: 'Late Career',
      description:
        'Transitioning into retirement and redefining purpose can create emotional and psychological challenges.',
    },
  ];

  currentIndex = 0;
  maxIndex = this.lifeStageList.length - 1;
  dots = Array(this.lifeStageList.length).fill(0);

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
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

}
