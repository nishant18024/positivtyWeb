import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../../shared/components/webinar-card/webinar-card.component';
import { ExploreCardComponent } from '../../shared/components/explore-card/explore-card.component';

@Component({
  selector: 'app-webinar',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent, ExploreCardComponent],
  templateUrl: './webinar.component.html',
  styleUrl: './webinar.component.scss',
})
export class WebinarComponent implements AfterViewInit {
  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLDivElement>;

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
  ];

  get upcomingWebinars() {
    return this.webinarsList.filter(w => w.upcoming);
  }

  get recordedWebinars() {
    return this.webinarsList.filter(w => w.recorded);
  }

  /* ================= EXPLORE ================= */
  exploreList = [
    {
      title: 'Explore Our Blogs',
      description:
        'Discover expert tips, practical strategies, and real-world insights that go beyond our webinars. Our blogs offer valuable guidance on mental health, personal growth, and emotional well-being — helping you stay informed, inspired, and one step ahead.',
      buttonText: 'Browse All Blogs',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/community/webinar/explore-blog.png',
    },
    {
      title: 'Explore Real @ Positivty',
      description:
        'Discover powerful stories from real people sharing their journeys through challenges, healing, and growth. These honest experiences spark hope, connection, and inspiration. Dive in — and see how sharing truly brings us together.',
      buttonText: 'Read Stories',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/community/webinar/explore-real.png',
    },
    {
      title: 'Resource Groups',
      description:
        "Find your support system in topic-based groups focused on mental wellness themes that matter to you. Whether you're here to share, listen, or learn, our Resource Groups offer a safe space to connect with others who truly understand.",
      buttonText: 'Join a Group',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/community/webinar/resource-group.png',
    },
  ];


  activeIndex = 0;

  ngAfterViewInit() {
    this.scrollToCard(0);
  }

  onScroll() {
    const container = this.scrollContainer.nativeElement;
    const width = container.offsetWidth;

    this.activeIndex = Math.round(container.scrollLeft / width);
  }

  scrollToCard(index: number) {
    const container = this.scrollContainer.nativeElement;

    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: 'smooth',
    });

    this.activeIndex = index;
  }
}
