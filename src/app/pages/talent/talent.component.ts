import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ValuesCardComponent } from '../../shared/components/values-card/values-card.component';
import { WorkFeatureCardComponent } from '../../shared/components/work-feature-card/work-feature-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talent',
  standalone: true,
  imports: [
    CommonModule,
    ValuesCardComponent,
    WorkFeatureCardComponent,
    RouterLink,
  ],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.scss',
})
export class TalentComponent {
  // ─────────────────────────────────────────────
  // Platform / Screen Handling (SSR Safe)
  // ─────────────────────────────────────────────
  private isBrowser: boolean;
  screenWidth = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.screenWidth = window.innerWidth;
      this._featurePageSize = this.screenWidth >= 768 ? 3 : 1;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;

    this.screenWidth = window.innerWidth;

    const newPageSize = this.screenWidth >= 768 ? 3 : 1;

    if (newPageSize !== this._featurePageSize) {
      this._featurePageSize = newPageSize;

      const maxIndex = Math.max(
        0,
        this.items.length - this._featurePageSize
      );

      if (this.featureIndex > maxIndex) {
        this.featureIndex = maxIndex;
      }
    }
  }

  // Tabs Section

  activeTab = 'fulltime';

  tabs = [
    {
      key: 'fulltime',
      label: 'FULL-TIME ROLES',
      title: 'Full-Time Roles',
      desc:
        "Be part of a dedicated team committed to innovation and excellence. In our full-time roles, you’ll have the autonomy to innovate, grow, and make a meaningful impact.",
    },
    {
      key: 'internship',
      label: 'INTERNSHIP',
      title: 'Internship',
      desc:
        'Dive into a dynamic learning environment where you can collaborate on impactful projects, gain hands-on experience, and grow under the mentorship of experienced professionals.',
    },
    {
      key: 'volunteer',
      label: 'VOLUNTEER',
      title: 'Volunteer',
      desc:
        'Contribute to our mission as a volunteer. Join like-minded individuals in uplifting communities, driving meaningful change, and creating a better future.',
    },
    {
      key: 'ambassador',
      label: 'MENTAL HEALTH AMBASSADOR',
      title: 'Mental Health Ambassador',
      desc:
        'Become the voice of Positivty by joining our ambassador program. Connect with communities, spread awareness, and amplify our vision of global mental wellness.',
    },
  ];

  get current() {
    return this.tabs.find((t) => t.key === this.activeTab);
  }

  // Values Carousel
  values = [
    {
      title: 'Empathy in Every Interaction',
      desc:
        'At Positivty, we lead with compassion. Whether working with clients, teammates, or partners, we approach every interaction with genuine care, ensuring every individual feels heard, valued, and supported.',
    },
    {
      title: 'Innovation with Purpose',
      desc:
        "Mental health is evolving, and so are we. By embracing bold ideas and leveraging the latest technology, we deliver creative, tailored solutions that redefine mental wellness for today’s world.",
    },
    {
      title: 'People Are the Priority',
      desc:
        'Our team and clients are at the heart of our mission. We nurture a supportive environment where everyone can grow, thrive, and be their authentic selves. At Positivty, it’s always people over processes.',
    },
    {
      title: 'Integrity That Inspires Trust',
      desc:
        'We believe in doing the right thing, always. Our transparency, honesty, and accountability build trust and strengthen relationships with those we serve and collaborate with.',
    },
    {
      title: 'Excellence as Our Standard',
      desc:
        'At Positivty, good is never enough. We strive for excellence in every initiative, consistently raising the bar to ensure the highest quality experiences and results.',
    },
    {
      title: 'Fostering Connection and Community',
      desc:
        'Mental wellness is a collective effort. By uniting people from diverse backgrounds, we create a community where everyone feels connected, valued, and empowered to support one another.',
    },
  ];

  valuesIndex = 0;

  get valueShift(): number {
    return this.screenWidth >= 768
      ? this.valuesIndex * 50
      : this.valuesIndex * 100;
  }

  prevValue() {
    this.valuesIndex =
      this.valuesIndex === 0
        ? this.values.length - 1
        : this.valuesIndex - 1;
  }

  nextValue() {
    this.valuesIndex =
      this.valuesIndex === this.values.length - 1
        ? 0
        : this.valuesIndex + 1;
  }

  // ─────────────────────────────────────────────
  // Feature Cards Slider
  // ─────────────────────────────────────────────
  items = [
    {
      title: 'A Mission That Matters',
      desc:
        'At Positivty, every task contributes to a greater purpose. You’ll be part of a team dedicated to creating lasting change in people’s lives and mental well-being.',
      icon: '🎯',
      bg: 'bg-[#fed591]',
    },
    {
      title: 'Growth Opportunities',
      desc:
        'From professional development workshops to mentorship programs, we ensure that your journey with us is as enriching as it is impactful.',
      icon: '📈',
      bg: 'bg-[#f2e6d3]',
    },
    {
      title: 'Supportive Environment',
      desc:
        'We believe in nurturing a culture of empathy and collaboration. Positivty provides access to wellness programs, therapy sessions, and a workplace where your well-being is a priority.',
      icon: '🤝',
      bg: 'bg-[#fed591]',
    },
    {
      title: 'Innovation-Driven Culture',
      desc:
        'We encourage creativity and innovation in everything we do. Your ideas and solutions will help shape the future of mental health care.',
      icon: '💼',
      bg: 'bg-[#f2e6d3]',
    },
    {
      title: 'A Community That Cares',
      desc:
        'Join a diverse and inclusive family where mutual respect and shared goals create an inspiring atmosphere.',
      icon: '🌱',
      bg: 'bg-[#fed591]',
    },
  ];

  featureIndex = 0;
  private _featurePageSize = 1;

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
    const maxIndex = Math.max(
      0,
      this.items.length - pageSize
    );

    this.featureIndex =
      this.featureIndex >= maxIndex
        ? 0
        : this.featureIndex + pageSize;
  }
}