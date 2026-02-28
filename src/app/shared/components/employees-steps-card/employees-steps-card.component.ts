import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employees-steps-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employees-steps-card.component.html',
  styleUrl: './employees-steps-card.component.scss'
})
export class EmployeesStepsCardComponent {
  @Input() stepNumber!: number;
  @Input() title!: string;
  @Input() description!: string;
}
