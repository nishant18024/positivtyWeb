import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Group {
  title: string;
  author: string;
  description: string;
  members: number;
}

@Component({
  selector: 'app-group-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-experience-card.component.html',
  styleUrls: ['./group-experience-card.component.scss'] // also fix this
})
export class GroupExperienceCardComponent {
  @Input() group!: Group;
}