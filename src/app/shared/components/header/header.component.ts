import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import path from 'node:path';

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

  constructor(private router: Router) { }

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
        { title: 'View Positivtys Psychologists', path: '/view-positivty-psychologists' },
        { title: 'Join Positivtys Psychologist Pool', path: '/join-positivty-psychologist-pool' },
        { title: 'Positivtys Therapy Packages', path: '/positivty-therapy-packages' }
      ]
    },
    {
      title: 'Services For',
      dropdown: [
        {
          title: 'Individuals',
          children: [
            { title: '1*1 Online Therapy', path: '/online-therapy' },
            { title: 'Gift a Session', path: '/gift-a-session' }
          ]
        },
        { title: 'Enterprises', path: '/enterprises' },
        { title: 'School And Universities', path: '/school-and-universities' }
      ]
    },
    {
      title: 'Join A Community',
      dropdown: [
        { title: 'Community Home', path: '/community/community-home' },
        { title: 'Webinars', path: '/community/webinars' },
        { title: 'Blog & Articles', path: '/community/blog-articles' },
        { title: 'Real At Positivty', path: '/community/real-at-positivity' },
        { title: 'Resource Groups', path: '/community/resource-groups' }
      ]
    },
    {
      title: 'Mental Health Conditions',
      dropdown: [
        { title: 'Bipolar Disorder', path: '/bipolar-disorder' },
        { title: 'Depression', path: '/depression' },
        { title: 'Disruptive Behavior', path: '/disruptive-behavior' },
        { title: 'Schizophrenia', path: '/schizophrenia' },
        { title: 'Aeneralized Anxiety', path: '/aeneralized-anxity' },
        { title: 'Adjustment Disorders', path: '/adjustment-disorders' },
        { title: 'PTSD', path: 'ptsd' },
        { title: 'Addictions', path: '/addictions' },
        { title: 'Eating Disorders', path: '/eating-disorders' },
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        { title: 'Resources', path: '/resources/resources' }
      ]
    },
    {
      title: 'Positivity',
      dropdown: [
        { title: 'Why Us', path: '/why-us' },
        { title: 'About Us', path: '/about-us' },
        { title: 'Leadership', path: '/leadership' },
        { title: 'Talent', path: '/talent' },
        { title: 'Terms & Conditions', path: '/terms-conditions' },
        { title: 'Privacy', path: '/privacy-policy' }
      ]
    }
  ];

  goToAboutDetials() {
    this.router.navigate(['/about']);
  }

}
