import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mental-health-advantage-card',
  imports: [CommonModule],
  templateUrl: './mental-health-advantage-card.component.html',
  styleUrl: './mental-health-advantage-card.component.scss'
})
export class MentalHealthAdvantageCardComponent {
  @Input() title!: string;
  @Input() description!: string;
}
