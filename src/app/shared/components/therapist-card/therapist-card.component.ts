import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-therapist-card',
  imports: [CommonModule],
  templateUrl: './therapist-card.component.html',
  styleUrl: './therapist-card.component.scss'
})
export class TherapistCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() location!: string;
  @Input() rating: number = 0;
  @Input() segment: string[] = [];
  @Input() expertise: string[] = [];

  stars = [1, 2, 3, 4, 5];


}
