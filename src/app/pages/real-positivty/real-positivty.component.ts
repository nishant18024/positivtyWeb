import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RealatpositivtyTestimonalCardComponent,
  Testimonial,
} from '../../shared/components/realatpositivty-testimonal-card/realatpositivty-testimonal-card.component';
import { StoryFormComponent } from '../../shared/components/story-form/story-form.component';
import { ExploreBlogCardComponent } from '../../shared/components/explore-blog-card/explore-blog-card.component';

@Component({
  selector: 'app-real-positivty',
  standalone: true,
  imports: [
    CommonModule,
    RealatpositivtyTestimonalCardComponent,
    StoryFormComponent,
    ExploreBlogCardComponent,
  ],
  templateUrl: './real-positivty.component.html',
  styleUrls: ['./real-positivty.component.scss'],
})
export class RealPositivtyComponent
  implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private scrollInterval: any;
  private cardWidth = 300;

  // -----------------------------
  // Testimonials (unchanged)
  // -----------------------------
  testimonials: Testimonial[] = [
    {
      title: 'From Burnout to Balance',
      message:
        '"I was constantly exhausted — physically, mentally, emotionally. I thought pushing through was strength, but it was really just survival. Through the Positivty community, I finally learned to pause and prioritize myself. Now, I no longer feel guilty for resting. I feel human."',
      author: 'Ritika Sharma',
      role: 'Marketing Strategist',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/community/realatpositivty/human-img.svg',
    },
    {
      title: 'From Feeling Alone to Finding Connection',
      message:
        '"I used to believe no one could understand what I was going through. But reading others’ stories on Real @ Positivty changed that. I found bits of my own journey in theirs. Sharing my story felt scary, but it became the moment I stopped feeling alone."',
      author: 'Aarav Jain',
      role: 'University Student',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/community/realatpositivty/human-img.svg',
    },
  ];

  currentIndex = 0;

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  // Blogs
  blogs = [
    {
      imageSrc: 'https://www.positivty.com/assets/website/assets/images/webinar-details/relief.jpg',
      imageAlt: 'Explore Our Blogs',
      title: 'Explore Our Blogs',
      description: 'Discover expert tips, practical strategies, and real-world insights that go beyond our webinars. Our blogs offer valuable guidance on mental health, personal growth, and emotional well-being — helping you stay informed, inspired, and one step ahead.',
      buttonLabel: 'Browse All Blogs',
      buttonLink: '/blogs',
    },
    {
      imageSrc: 'https://www.positivty.com/assets/website/assets/images/webinar-details/Frame%201707478503%20(1).png',
      imageAlt: 'Explore Our Webinars',
      title: 'Explore Our Webinars',
      description: 'Join live, expert-led sessions on topics like stress, anxiety, self-care, and personal growth. Our webinars are designed to give you tools, insights, and support — all from the comfort of your space. Stay connected, learn something new, and take the next step in your wellness journey',
      buttonLabel: 'Join a Webinar',
      buttonLink: '/webinars',
    },
    {
      imageSrc: 'https://www.positivty.com/assets/website/assets/images/webinar-details/Frame%201707478503%20(1).png',
      imageAlt: 'Resource Groups',
      title: 'Resource Groups',
      description: "Find your support system in topic-based groups focused on mental wellness themes that matter to you. Whether you're here to share, listen, or learn, our Resource Groups offer a safe space to connect with others who truly understand.",
      buttonLabel: 'Join a Group',
      buttonLink: '/group',
    },
  ]


  // Auto Scroll (Mobile Only)
  ngAfterViewInit(): void {
    if (window.innerWidth < 768 && this.scrollContainer) {
      this.startAutoScroll();
    }
  }

  startAutoScroll(): void {
    this.scrollInterval = setInterval(() => {
      const container = this.scrollContainer.nativeElement;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({
          left: this.cardWidth,
          behavior: 'smooth',
        });
      }
    }, 2500);
  }

  ngOnDestroy(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}