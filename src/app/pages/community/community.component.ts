import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../../shared/components/webinar-card/webinar-card.component';
import { BlogCarouselComponent } from '../../shared/components/blog-carousel/blog-carousel.component';
import { VideoPlayerComponent } from '../../shared/components/video-player/video-player.component';
import { ResourceGroupCardComponent } from '../../shared/components/resource-group-card/resource-group-card.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommonModule,
    WebinarCardComponent,
    BlogCarouselComponent,
    VideoPlayerComponent,
    ResourceGroupCardComponent,
  ],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {

  /* ================= WEBINARS ================= */
  webinarsList = [
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
      date: 'Mar 22, 2025, 9:30 AM',
      recorded: true,
      upcoming: false,
      btnText: 'Watch Now',
      title: 'The Curse of the Digital Age: Decoding Anxiety and Depression',
      description: "Join Positivity's Webinar on Depression and Anxiety and hear from our experts!",
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
      date: 'Apr 10, 2025, 6:00 PM',
      recorded: false,
      upcoming: true,
      btnText: 'Register Now',
      title: 'Healing Minds: Building Emotional Resilience',
      description: 'A live interactive session focused on mental wellness and emotional growth.',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
      date: 'Mar 22, 2025, 9:30 AM',
      recorded: true,
      upcoming: false,
      btnText: 'Watch Now',
      title: 'The Curse of the Digital Age: Decoding Anxiety and Depression',
      description: "Join Positivity's Webinar on Depression and Anxiety and hear from our experts!",
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
      date: 'Apr 10, 2025, 6:00 PM',
      recorded: false,
      upcoming: true,
      btnText: 'Register Now',
      title: 'Healing Minds: Building Emotional Resilience',
      description: 'A live interactive session focused on mental wellness and emotional growth.',
    },
  ];

  get upcomingWebinars() {
    return this.webinarsList.filter(w => w.upcoming);
  }

  get recordedWebinars() {
    return this.webinarsList.filter(w => w.recorded);
  }

  /* ================= BLOG CAROUSEL ================= */
  carouselList = [
    { title: 'Our Blog & Articles', buttonText: 'Read More', buttonLink: '/blogs' },
    { title: 'Latest Mental Health Reads', buttonText: 'Explore', buttonLink: '/blogs/latest' },
    { title: 'Featured Stories', buttonText: 'View All', buttonLink: '/blogs/featured' },
  ];

  currentIndex = 0;

  get currentItem() {
    return this.carouselList[this.currentIndex];
  }

  prevCarousel() {
    this.currentIndex =
      this.currentIndex === 0 ? this.carouselList.length - 1 : this.currentIndex - 1;
  }

  nextCarousel() {
    this.currentIndex =
      this.currentIndex === this.carouselList.length - 1 ? 0 : this.currentIndex + 1;
  }

  /* ================= RESOURCE GROUPS ================= */
  resourceGroupList = [
    {
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
      title: 'Anxiety Support Group',
      members: 432,
      description: 'A safe space to talk about daily stress, panic attacks, and ways to feel grounded.',
      buttonText: 'Join Group',
    },
    {
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38',
      title: 'ADHD Community Circle',
      members: 332,
      description: 'Share strategies, focus tips, and daily wins with others who just get it.',
      buttonText: 'Join Group',
    },
    {
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'Build Your Circle',
      members: 444,
      description: 'Bring people together to collaborate and stay connected.',
      buttonText: 'Join Group',
    },
    {
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'Build Your Circle',
      members: 444,
      description: 'Bring people together to collaborate and stay connected.',
      buttonText: 'Join Group',
    },
    {
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      title: 'Build Your Circle',
      members: 444,
      description: 'Bring people together to collaborate and stay connected.',
      buttonText: 'Join Group',
    },
  ];

  /* ✅ REQUIRED for scroll buttons */
  @ViewChild('scrollContainer', { static: false })
  scrollContainer!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -380,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 380,
      behavior: 'smooth',
    });
  }
}
