import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true, // ✅ ADD THIS
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'] // ✅ small correction (plural)
})
export class FeatureCardComponent {
  @Input() image!: string;
 @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
}
