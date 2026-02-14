import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-feature-card',
  imports: [CommonModule],
  standalone: true, 
  templateUrl: './work-feature-card.component.html',
  styleUrl: './work-feature-card.component.scss'
})
export class WorkFeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() bgColor: string = '';
}
