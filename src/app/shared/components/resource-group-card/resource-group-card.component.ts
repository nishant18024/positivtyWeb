import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-group-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-group-card.component.html',
  styleUrl: './resource-group-card.component.scss'
})
export class ResourceGroupCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() members!: number;
  @Input() description!: string;
  @Input() buttonText: string = 'Join Group';
}
