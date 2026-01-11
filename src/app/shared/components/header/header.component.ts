import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;
  activeIndex: number | null = null;
  contactActive: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleSubMenu(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index;
    }

  }

  toggleContactMenu() {
    this.contactActive = !this.contactActive;
  }

  contactItems = [
    {
      title: "Contact Us",
      path: "/contact"
    },
    {
      title: "Raise An Issue",
      path: "raise-an-issue"
    },
    {
      title: "Feedback & Suggestions",
      path: "feedback-suggestions"

    },
    {
      title: "FAQs",
      path: "faqs"
    }
  ]

  menuItems = [
    {
      title: 'Psychologist & Therapist',
      dropdown: [
        { title: 'Find Therapist', path: '/psychologist/find-therapist' },
        { title: 'Book Session', path: '/psychologist/book-session' },
        { title: 'Specialists', path: '/psychologist/specialists' }
      ]
    },
    {
      title: 'Services For',
      dropdown: [
        { title: 'Individuals', path: '/services/individuals' },
        { title: 'Couples', path: '/services/couples' },
        { title: 'Children', path: '/services/children' }
      ]
    },
    {
      title: 'Join A Community',
      dropdown: [
        { title: 'Forums', path: '/community/forums' },
        { title: 'Events', path: '/community/events' },
        { title: 'Groups', path: '/community/groups' }
      ]
    },
    {
      title: 'Mental Health Conditions',
      dropdown: [
        { title: 'Anxiety', path: '/conditions/anxiety' },
        { title: 'Depression', path: '/conditions/depression' },
        { title: 'Stress', path: '/conditions/stress' }
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        { title: 'Blogs', path: '/resources/blogs' },
        { title: 'Guides', path: '/resources/guides' },
        { title: 'Videos', path: '/resources/videos' }
      ]
    },
    {
      title: 'Positivity',
      dropdown: [
        { title: 'Quotes', path: '/positivity/quotes' },
        { title: 'Stories', path: '/positivity/stories' },
        { title: 'Meditation', path: '/positivity/meditation' }
      ]
    }
  ];

}
