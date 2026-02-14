import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ValuesCardComponent } from '../../shared/components/values-card/values-card.component';
import { WorkFeatureCardComponent } from "../../shared/components/work-feature-card/work-feature-card.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-talent',
  imports: [CommonModule, ValuesCardComponent, WorkFeatureCardComponent, RouterLink],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.scss',
})
export class TalentComponent {
  activeTab = 'fulltime';

  tabs = [
    {
      key: 'fulltime',
      label: 'FULL-TIME ROLES',
      title: 'Full-Time Roles',
      desc: "'Be part of a dedicated team committed to innovation and excellence. In our full-time roles, you'll have the autonomy to innovate, grow, and make a meaningful impact.'",
    },
    {
      key: 'internship',
      label: 'INTERNSHIP',
      title: 'Internship',
      desc: 'Dive into a dynamic learning environment where you can collaborate on impactful projects, gain hands-on experience, and grow under the mentorship of experienced professionals.',
    },
    {
      key: 'volunteer',
      label: 'VOLUNTEER',
      title: 'Volunteer',
      desc: 'Support meaningful causes, make a difference, and contribute your skills for positive social impact.',
    },
    {
      key: 'ambassador',
      label: 'MENTAL HEALTH AMBASSADOR',
      title: 'Mental Health Ambassador',
      desc: 'Advocate mental well-being and help spread awareness through community engagement.',
    },
  ];

  get current() {
    return this.tabs.find((t) => t.key === this.activeTab);
  }

  // ─── Values Carousel ──────────────────────────────────────────────────────
  values = [
    {
      title: 'Empathy in Every Interaction',
      desc: `At Positivity, we lead with compassion. Whether working with clients, teammates, or partners, we approach every interaction with genuine care, ensuring every individual feels heard, valued, and supported.`,
    },
    {
      title: 'Innovation with Purpose',
      desc: `Mental health is evolving, and so are we. By embracing bold ideas and leveraging the latest technology, we deliver creative, tailored solutions that redefine mental wellness for today's world.`,
    },
    {
      title: 'Community & Inclusion',
      desc: `We foster a culture of belonging where diverse voices are valued, empowering communities to grow together through shared understanding and support.`,
    },
  ];

  // Start at 0 — starting at 1 caused a blank offset on initial load
  valuesIndex = 0;

  // Shifts by 100% per slide on mobile (1 visible), 50% on desktop (2 visible)
  get valueShift(): number {
    return window.innerWidth >= 768 ? this.valuesIndex * 50 : this.valuesIndex * 100;
  }

  prevValue() {
    this.valuesIndex =
      this.valuesIndex === 0 ? this.values.length - 1 : this.valuesIndex - 1;
  }

  nextValue() {
    this.valuesIndex =
      this.valuesIndex === this.values.length - 1 ? 0 : this.valuesIndex + 1;
  }

  // ─── Feature Cards Slider ─────────────────────────────────────────────────
  items = [
    {
      title: 'A Mission That Matters',
      desc: 'At Positivity, every task contributes to a greater purpose — helping people live healthier, happier lives through accessible mental wellness support.',
      icon: '🎯',
      bg: 'bg-[#ffd996]',
    },
    {
      title: 'Growth Opportunities',
      desc: 'From professional development workshops to mentorship programs, we invest in your growth so you can reach your full potential.',
      icon: '📈',
      bg: 'bg-[#f4ead8]',
    },
    {
      title: 'Supportive Environment',
      desc: 'We believe in nurturing a culture of empathy and collaboration where every team member feels safe to bring their authentic self to work.',
      icon: '🤝',
      bg: 'bg-[#ffd996]',
    },
    {
      title: 'Flexible Work Culture',
      desc: 'We understand that great work happens in many forms. Enjoy flexible arrangements that help you thrive both professionally and personally.',
      icon: '💼',
      bg: 'bg-[#f4ead8]',
    },
    {
      title: 'Meaningful Impact',
      desc: 'Every contribution you make ripples out into the world, helping individuals and communities access the mental health support they need.',
      icon: '🌱',
      bg: 'bg-[#ffd996]',
    },
  ];

  featureIndex = 0;
  private _featurePageSize = 3;

  constructor() {
    this._featurePageSize = window.innerWidth >= 768 ? 3 : 1;
  }

  @HostListener('window:resize')
  onResize() {
    // Recompute feature page size on resize
    const newPageSize = window.innerWidth >= 768 ? 3 : 1;
    if (newPageSize !== this._featurePageSize) {
      this._featurePageSize = newPageSize;
      // Clamp index so we never land on an empty page
      const maxIndex = Math.max(0, this.items.length - this._featurePageSize);
      if (this.featureIndex > maxIndex) {
        this.featureIndex = maxIndex;
      }
    }
    // valueShift getter re-evaluates automatically on next CD cycle
  }

  get featurePageSize(): number {
    return this._featurePageSize;
  }

  get visibleFeatures() {
    return this.items.slice(
      this.featureIndex,
      this.featureIndex + this.featurePageSize
    );
  }

  prevFeature() {
    const pageSize = this.featurePageSize;
    this.featureIndex =
      this.featureIndex === 0
        ? Math.max(0, this.items.length - pageSize)
        : Math.max(0, this.featureIndex - pageSize);
  }

  nextFeature() {
    const pageSize = this.featurePageSize;
    const maxIndex = Math.max(0, this.items.length - pageSize);
    this.featureIndex =
      this.featureIndex >= maxIndex ? 0 : this.featureIndex + pageSize;
  }
}