import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-values-card',
  imports: [CommonModule],
  templateUrl: './values-card.component.html',
  styleUrl: './values-card.component.scss'
})
export class ValuesCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';
}
