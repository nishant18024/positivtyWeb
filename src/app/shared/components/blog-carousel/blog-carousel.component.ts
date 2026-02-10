import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-carousel.component.html',
  styleUrl: './blog-carousel.component.scss'
})
export class BlogCarouselComponent {
  @Input() title!: string;
  @Input() buttonText!: string;
  @Input() buttonLink!: string | any[];

  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}

