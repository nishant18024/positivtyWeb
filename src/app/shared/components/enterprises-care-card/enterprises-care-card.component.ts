import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enterprises-care-card',
  imports: [CommonModule],
  templateUrl: './enterprises-care-card.component.html',
  styleUrl: './enterprises-care-card.component.scss'
})
export class EnterprisesCareCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
