import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore-community-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './explore-community-card.component.html',
  styleUrl: './explore-community-card.component.scss'
})
export class ExploreCommunityCardComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt: string = '';
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonLabel: string = 'Browse';
  @Input() buttonLink: string = '/';
}
