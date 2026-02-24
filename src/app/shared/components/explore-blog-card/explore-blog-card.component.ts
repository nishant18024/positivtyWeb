import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-blog-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-blog-card.component.html',
  styleUrl: './explore-blog-card.component.scss'
})
export class ExploreBlogCardComponent {
  @Input() imageSrc: string = 'assets/images/blog-cover.jpg';
  @Input() imageAlt: string = 'Explore Our Blogs';
  @Input() title: string = 'Explore Our Blogs';
  @Input() description: string =
    'Discover expert tips, practical strategies, and real-world insights that go beyond our webinars. Our blogs offer valuable guidance on mental health, personal growth, and emotional well-being — helping you stay informed, inspired, and one step ahead.';
  @Input() buttonLabel: string = 'Browse All Blogs';
  @Input() buttonLink: string = '/blogs';

  onBrowse(): void {
    window.location.href = this.buttonLink;
  }
}
