import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  url: string;
  fragment?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  openIndex: number | null = null;

  footerSections: FooterSection[] = [
    {
      title: 'Resources',
      links: [
        { label: 'How It Works', url: '/', fragment: 'how-it-works' },
        { label: 'FAQs', url: '/faqs' },
      ],
    },
    {
      title: 'Psychologists',
      links: [
        { label: "View Positivty's Psychologists", url: '/view-positivty-psychologists' },
        { label: "Join Positivty's Psychologist Pool", url: '/join-positivty-psychologist-pool' },
        { label: "Positivty's Therapy Packages", url: '/positivty-therapy-packages' },
      ],
    },
    {
      title: 'Services For',
      links: [
        { label: 'Individuals', url: '/individuals' },
        { label: 'Enterprises', url: '/enterprises' },
        { label: 'Education', url: '/education' },
        { label: '1x1 Online Therapy', url: '/view-positivty-psychologists' },
        { label: 'Gift A Session', url: '/gift-a-session' },
      ],
    },
    {
      title: 'Join A Community',
      links: [
        { label: 'Community Home', url: '/community' },
        { label: 'Webinars', url: '/webinars' },
        { label: 'Blog & Articles', url: '/blog-articles' },
        { label: 'Real At Positivty', url: '/real-positivty' },
        { label: 'Resource Groups', url: '/resource-groups' },
      ],
    },
    {
      title: 'Positivty',
      links: [
        { label: 'Why Us', url: '/', fragment: 'why-choose-us' },
        { label: 'About Us', url: '/about-us' },
        { label: 'Leadership', url: '/leadership' },
        { label: 'Talent', url: '/talent' },
        { label: 'Terms & Conditions', url: '/terms-and-conditions' },
        { label: 'Privacy', url: '/privacy-policy' },
      ],
    },
    {
      title: 'Account',
      links: [
        { label: 'User', url: '/terms-of-use' },
        { label: 'Therapist', url: '/terms-and-conditions' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Contact', url: '/contact-us' },
        { label: 'Raise an Issue', url: '/raise-an-issue' },
        { label: 'Feedback & Suggestions', url: '/feedback-suggestions' },
      ],
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  trackByTitle(index: number, item: FooterSection) {
    return item.title;
  }


  socialLinks = [
    { icon: 'fa-facebook-f', label: 'Facebook' },
    { icon: 'fa-instagram', label: 'Instagram' },
    { icon: 'fa-x-twitter', label: 'Twitter' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fa-youtube', label: 'YouTube' },
    { icon: 'fa-snapchat', label: 'Snapchat' },
  ];
}