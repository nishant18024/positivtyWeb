import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  imports: [CommonModule],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.scss'
})
export class StepCardComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() icon = '';
}
