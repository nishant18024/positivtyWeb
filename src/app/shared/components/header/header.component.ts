import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../../../../theme.service';

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
  isDarkMode = false;

  constructor(public theme: ThemeService) {
    // Subscribe to theme changes
    this.theme.isDark$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.theme.toggle();
  }

  isOpen = false;
  activeIndex: number | null = null;
  contactActive: boolean = false;
  nestedMenuState: { [key: string]: boolean } = {};

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

  toggleNestedMenu(parentIndex: number, childIndex: number) {
    const key = `${parentIndex}-${childIndex}`;
    this.nestedMenuState[key] = !this.nestedMenuState[key];
  }

  isNestedOpen(parentIndex: number, childIndex: number): boolean {
    const key = `${parentIndex}-${childIndex}`;
    return this.nestedMenuState[key] || false;
  }

  getDropdownHeight(dropdown: any[]): string {
    let height = 0;
    dropdown.forEach((item, index) => {
      height += 40; // Base height for each item
      if (item.children && this.isNestedOpen(this.activeIndex!, index)) {
        height += item.children.length * 40; // Add height for nested children
      }
    });
    return height + 'px';
  }

  contactItems = [
    {
      title: "Contact Us",
      path: "/contact"
    },
    {
      title: "Raise An Issue",
      path: "/raise-an-issue"
    },
    {
      title: "Feedback & Suggestions",
      path: "/feedback-suggestions"
    },
    {
      title: "FAQs",
      path: "/faqs"
    }
  ]

  menuItems = [
    {
      title: 'Psychologist',
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
            { title: '1*1 Online Therapy', path: '/view-positivty-psychologists' },
            { title: 'Gift a Session', path: '/gift-a-session' }
          ]
        },
        { title: 'Enterprises', path: '/enterprises' },
        { title: 'Education', path: '/education' }
      ]
    },
    {
      title: 'Join A Community',
      dropdown: [
        { title: 'Community Home', path: '/community' },
        { title: 'Webinars', path: 'webinars' },
        { title: 'Blog & Articles', path: '/blog-articles' },
        { title: 'Real At Positivty', path: '/real-at-positivity' },
        { title: 'Resource Groups', path: '/resource-groups' }
      ]
    },
    {
      title: 'Mental Health Conditions',
      dropdown: [
        { title: 'Bipolar Disorder', path: '/bipolar-disorder' },
        { title: 'Depression', path: '/depression' },
        { title: 'Disruptive Behavior', path: '/disruptive-behavior' },
        { title: 'Schizophrenia', path: '/schizophrenia' },
        { title: 'Generalized Anxiety', path: '/generalized-anxiety' },
        { title: 'Adjustment Disorders', path: '/adjustment-disorders' },
        { title: 'PTSD', path: '/ptsd' },
        { title: 'Addictions', path: '/addictions' },
        { title: 'Eating Disorders', path: '/eating-disorders' },
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        { title: 'How It Works', path: '/', fragment: 'how-it-works' },
        { title: 'FAQs', path: '/faqs' },
      ]
    },
    {
      title: 'Positivity',
      dropdown: [
        { title: 'Why Us', path: '/', fragment: 'why-choose-us' },
        { title: 'About Us', path: '/about-us' },
        { title: 'Leadership', path: '/leadership' },
        { title: 'Talent', path: '/talent' },
        {
          title: 'Terms & Conditions',
          children: [
            { title: 'User', path: '/user' },
            { title: 'Therapist', path: '/therapist' }
          ]
        },
        { title: 'Privacy', path: '/privacy-policy' }
      ]
    }
  ];

  // goToAboutDetials() {
  //   this.router.navigate(['/about']);
  // }

}