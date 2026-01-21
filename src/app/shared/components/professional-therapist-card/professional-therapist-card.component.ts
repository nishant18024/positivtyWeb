import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-therapist-card',
  imports: [CommonModule],
  templateUrl: './professional-therapist-card.component.html',
  styleUrl: './professional-therapist-card.component.scss'
})
export class ProfessionalTherapistCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() buttonText: string = 'View Profile';
}
