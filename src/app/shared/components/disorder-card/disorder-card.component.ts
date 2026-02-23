import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disorder-card',
  imports: [CommonModule],
  templateUrl: './disorder-card.component.html',
  styleUrl: './disorder-card.component.scss'
})
export class DisorderCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() reverse: boolean = false;
}
