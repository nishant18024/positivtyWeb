import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InfoCard {
  id: number;
  title: string;
  description: string;
  stats: string[];
  image: string;
}

@Component({
  selector: 'app-enterprises-info-card',
  imports: [CommonModule],
  templateUrl: './enterprises-info-card.component.html',
  styleUrl: './enterprises-info-card.component.scss'
})
export class EnterprisesInfoCardComponent {

  @Input() card!: InfoCard;
  @Input() index: number = 0;

  get isEven(): boolean {
    return this.index % 2 === 0;
  }
}
