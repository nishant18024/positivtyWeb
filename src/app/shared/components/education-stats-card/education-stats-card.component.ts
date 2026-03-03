import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-education-stats-card',
  imports: [CommonModule],
  templateUrl: './education-stats-card.component.html',
  styleUrl: './education-stats-card.component.scss'
})
export class EducationStatsCardComponent {
  @Input() percentage: string = '13%';

  @Input() description: string =
    '1 in 7 children aged 3–17 (13%) has a diagnosed mental or behavioral condition.';

  @Input() imageUrl: string =
    'https://positivtystaticassets.blob.core.windows.net/images/education/banner/banner1.jpeg';

}
