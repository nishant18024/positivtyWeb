import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leadership-card',
  imports: [CommonModule],
  templateUrl: './leadership-card.component.html',
  styleUrl: './leadership-card.component.scss'
})
export class LeadershipCardComponent {
  @Input() name!: string;
  @Input() role!: string;
  @Input() image!: string;
  @Input() description!: string;
}
