import {
  Component
} from '@angular/core';
import { UiButtonComponent } from "../../shared/ui-button/ui-button.component";
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from "../../shared/components/feature-card/feature-card.component";
import { OurTherapistsComponent } from "./our-therapists/our-therapists.component";
import { ServiceOffersSectionComponent } from "./service-offers-section/service-offers-section.component";

@Component({
  selector: 'app-about-us',
  imports: [UiButtonComponent, CommonModule, FeatureCardComponent, OurTherapistsComponent, ServiceOffersSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {



  problemCardDetail = [
    {
      icon: 'ph-warning-circle',
      title: 'Stigma:',
      description: 'Fear of judgment prevents open conversations about mental health',
    },
    {
      icon: 'ph-lock-key',
      title: 'Inaccessibility:',
      description: 'High costs, long waitlists, and limited local resources',
    },
    {
      icon: 'ph-user-minus',
      title: 'Isolation:',
      description: 'Lack of safe spaces for support and growth',
    },
    {
      icon: 'ph-puzzle-piece',
      title: 'One-Size-Fits-All Solutions:',
      description: 'Rigid systems that ignore individual needs',
    },
  ];

  features = [
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/personalized-matching.jpg',
      title: 'Personalized Matching:',
      description:
        'AI-driven recommendations based on your needs, preferences, and goals.',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/global-access.jpg',
      title: 'Global Access:',
      description:
        'Connect with a wide array of licensed therapists across 50+ countries.',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/flexible-sessions.png',
      title: 'Flexible Sessions:',
      description:
        '1:1 video calls group therapy, or in-person meetings - your choice.',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/holistic-tools.jpg',
      title: 'Holistic Tools:',
      description:
        'Workshops, self-assessments, and peer support through the Positivty Community',
    },
    {
      image: 'https://positivtystaticassets.blob.core.windows.net/images/aboutus/security-trust.jpg',
      title: 'Security and Trust:',
      description:
        'End-to-end encryption and HIPAA-compliant technology',
    },
  ];

  whoWeAreFeatures = [
    {
      icon: 'ph-heart',
      title: 'Personal Care',
    },
    {
      icon: 'ph-identification-badge',
      title: 'Certified\nTherapists',
    },
    {
      icon: 'ph-thumbs-up',
      title: 'Quality\nAssurance',
    },
    {
      icon: 'ph-certificate',
      title: 'Ease of use',
    },
  ];







  coreValues = [
    {
      icon: 'ph-chats-circle',
      title: 'Empathy',
      desc: 'We understand, listen, and care deeply.',
    },
    {
      icon: 'ph-lightbulb-filament',
      title: 'Innovation',
      desc: 'We strive to stay ahead with science-backed therapies.',
    },
    {
      icon: 'ph-globe',
      title: 'Accessibility',
      desc: 'We make mental health support available to everyone.',
    },
    {
      icon: 'ph-medal',
      title: 'Excellence',
      desc: 'We uphold the highest standards in care and service delivery.',
    },
  ];

}
