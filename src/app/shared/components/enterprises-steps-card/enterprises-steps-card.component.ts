import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enterprises-steps-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './enterprises-steps-card.component.html',
  styleUrl: './enterprises-steps-card.component.scss'
})
export class EnterprisesStepsCardComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
}
