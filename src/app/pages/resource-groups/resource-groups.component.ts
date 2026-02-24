import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  GroupExperienceCardComponent,
  Group,
} from '../../shared/components/group-experience-card/group-experience-card.component';
import { ExploreCommunityCardComponent } from "../../shared/components/explore-community-card/explore-community-card.component";

@Component({
  selector: 'app-resource-groups',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GroupExperienceCardComponent,
    ExploreCommunityCardComponent
  ],
  templateUrl: './resource-groups.component.html',
  styleUrls: ['./resource-groups.component.scss'], // ✅ FIXED (plural)
})
export class ResourceGroupsComponent {
  search = '';
  sortByDate = '';
  sortByMembers = '';

  groups: Group[] = [
    {
      title: 'The Healing Circle – Depression',
      author: 'Yukti Gupta',
      description:
        'A safe space for anyone navigating the darkness of depression. Share stories, resources, and support.',
      members: 5,
    },
    {
      title: 'Loneliness – Together We Heal',
      author: 'Yukti Gupta',
      description:
        'Feeling disconnected? Join us to build meaningful bonds and rediscover companionship.',
      members: 3,
    },
    {
      title: 'Exam Stress – Mind Over Marks',
      author: 'Yukti Gupta',
      description:
        'Exams can be overwhelming, but you don’t have to face it alone. Stay calm and confident.',
      members: 1,
    },
    {
      title: 'Feeling Lost – Finding North',
      author: 'Yukti Gupta',
      description:
        'For moments when life feels directionless. Find clarity, purpose, and peace.',
      members: 3,
    },
  ];

  communitycards = [
    {
      imageSrc:
        'https://positivtystaticassets.blob.core.windows.net/images/community/realatpositivty/real-at-banner.png',
      imageAlt: 'Blog Preview',
      title: 'Explore Our Blogs',
      description:
        'Discover expert tips, practical strategies, and real-world insights that go beyond our webinars. Our blogs offer valuable guidance on mental health, personal growth, and emotional well-being — helping you stay informed, inspired, and one step ahead.',
      buttonLabel: 'Browse All Blogs',
      buttonLink: '/blogs',
    },
    {
      imageSrc:
        'https://positivtystaticassets.blob.core.windows.net/images/community/realatpositivty/real-at-banner.png',
      imageAlt: 'Stories',
      title: 'Explore Real @ Positivty',
      description:
        'Discover powerful stories from real people sharing their journeys through challenges, healing, and growth. These honest experiences spark hope, connection, and inspiration. Dive in — and see how sharing truly brings us together.',
      buttonLabel: 'Read Stories',
      buttonLink: '/stories',
    },
    {
      imageSrc:
        'https://positivtystaticassets.blob.core.windows.net/images/community/realatpositivty/real-at-banner.png',
      imageAlt: 'Webinars',
      title: 'Explore Our Webinars',
      description:
        'Join live, expert-led sessions on topics like stress, anxiety, self-care, and personal growth. Our webinars are designed to give you tools, insights, and support — all from the comfort of your space. Stay connected, learn something new, and take the next step in your wellness journey',
      buttonLabel: 'View Webinars',
      buttonLink: '/webinars',
    },
  ];

}