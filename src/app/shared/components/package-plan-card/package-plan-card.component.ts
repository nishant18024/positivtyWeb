import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-plan-card',
  imports: [CommonModule],
  templateUrl: './package-plan-card.component.html',
  styleUrl: './package-plan-card.component.scss'
})
export class PackagePlanCardComponent {
  @Input() data!: {
    image: string;
    title: string;
    name: string;
    qualification: string;
    price: number;
    location: string;
    languages: string;
    sessions: number;
    mode: string;
    rating: number;
  };

  stars = Array(5).fill(0);
}
