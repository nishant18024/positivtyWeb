import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  imports: [CommonModule],
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.scss'
})
export class WebinarCardComponent {
  @Input() image!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() recorded: boolean = false;
  @Input() upcoming: boolean = false;
  @Input() btnText!: string;
}
