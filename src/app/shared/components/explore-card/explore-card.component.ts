import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  imports: [CommonModule],
  templateUrl: './explore-card.component.html',
  styleUrl: './explore-card.component.scss'
})
export class ExploreCardComponent {
  @Input() title !: string;
  @Input() description!: string;
  @Input() image !: any;
  @Input() buttonText!: string;
}
