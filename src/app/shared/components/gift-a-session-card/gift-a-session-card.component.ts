import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gift-a-session-card',
  imports: [CommonModule],
  templateUrl: './gift-a-session-card.component.html',
  styleUrl: './gift-a-session-card.component.scss'
})
export class GiftASessionCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() reverse = false;
}
