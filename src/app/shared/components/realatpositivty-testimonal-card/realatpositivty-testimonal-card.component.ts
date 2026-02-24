import { Component, Input } from '@angular/core';

export interface Testimonial {
  title: string;
  message: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-realatpositivty-testimonal-card',
  standalone: true,
  imports: [],
  templateUrl: './realatpositivty-testimonal-card.component.html',
  styleUrls: ['./realatpositivty-testimonal-card.component.scss']
})
export class RealatpositivtyTestimonalCardComponent {
  @Input() data!: Testimonial;
}