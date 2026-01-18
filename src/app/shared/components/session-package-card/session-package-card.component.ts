import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-session-package-card',
  imports: [CommonModule],
  templateUrl: './session-package-card.component.html',
  styleUrl: './session-package-card.component.scss'
})
export class SessionPackageCardComponent {
  @Input() image!: string;
  @Input() rating: number = 0;
  @Input() title!: string;
  @Input() name!: string;
  @Input() grade!: string;
  @Input() price!: number;
  @Input() totalSession!: number;
  @Input() modeOfSession!: string;


  stars = [1, 2, 3, 4, 5];
}
