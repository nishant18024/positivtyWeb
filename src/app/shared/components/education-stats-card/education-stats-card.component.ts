import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-education-stats-card',
  imports: [CommonModule],
  templateUrl: './education-stats-card.component.html',
  styleUrl: './education-stats-card.component.scss'
})
export class EducationStatsCardComponent {
  @Input() percentage!: string;

  @Input() description!: string;

  @Input() imageUrl!: string;

}
