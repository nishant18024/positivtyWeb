import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MentalHealthPoint {
  text: string;
  source?: string;
}

export interface MentalHealthCard {
  title: string;
  points: MentalHealthPoint[];
}

@Component({
  selector: 'app-mental-health-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mental-health-card.component.html',
  styleUrl: './mental-health-card.component.scss'
})
export class MentalHealthCardComponent {
  @Input({ required: true }) title!: string;
  @Input() points: MentalHealthPoint[] = [];

  get hasPoints(): boolean {
    return this.points.length > 0;
  }
}