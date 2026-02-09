import { Component } from '@angular/core';
import { LeadershipCardComponent } from "../../shared/components/leadership-card/leadership-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [LeadershipCardComponent, CommonModule],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {

  leadershipCards = [
    {
      name: "Yukti Gupta",
      role: "Marketing Manager",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/yukti-gupta.JPG",
      description: "Brings over 8+ years of experience in leading marketing strategy, brand building, and content-led growth across startups and digital-first companies. Has worked with Elevate Career Network, Turing.com, and RedCube Digital to drive high-impact campaigns, manage rebrands, and build marketing functions from the ground up. Combines creative direction with executional depth to craft narratives that connect, engage, and deliver results.",
    },
    {
      name: "Apoorva S",
      role: "Account Executive",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/apoorva-s.JPG",
      description: "Seasoned B2B sales leader with 7+ years driving enterprise deals across healthcare and edtech. Known for closing high-value contracts, managing complex procurement cycles, and exceeding quotas. Trusted by C-suite stakeholders for consultative, ROI-focused selling. Recognized for securing record-breaking deals and ensuring top-tier client retention across SaaS, hospitals, and universities.",
    },
    {
      name: "Mehak Miglani",
      role: "Account Executive",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/mehak-miglani.JPG",
      description: "A results-oriented sales and client relationship professional with a strong background in streamlining sales operations, enhancing customer engagement, and driving business growth. I bring experience in CRM optimization, data-driven strategy, and stakeholder collaboration, with a focus on delivering value through efficient processes and meaningful relationships.",
    },
    {
      name: "Aakrati Gupta",
      role: "Account Executive",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/aakrati-gupta.JPG",
      description: "A results-driven Account Executive with over 5 years of experience in B2B SaaS sales, specializing in end-to-end deal closures. Proven expertise in navigating both international and domestic markets, with a strong track record of building client relationships, driving revenue growth, and delivering impactful solutions tailored to diverse business needs.",
    },
    {
      name: "Indira Deshpande",
      role: "Account Executive",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/indira-deshpande.JPG",
      description: "Bring over 5.5+ years of experience in the field of sales and business development. Currently, working as a Business Developement Executive, where I specialize in client relationship management, lead generation and closing deals. My strengths lie in understanding client needs, delivering tailored solutions and maintaining long-term partnerships. I am passionate about driving revenue growth and contributing to team success through strategic sales initiatives.",
    },
    {
      name: "Satadeepa Som",
      role: "Product & Operation Executive",
      image: "https://positivtystaticassets.blob.core.windows.net/images/leaderships/satadeepa-som.JPG",
      description: "Satadeepa is a Consultant Psychologist with 7 years of experience in mental health. She specializes in grief counseling, intimacy coaching, and mindfulness-based therapy. With an MSc in Clinical Psychology and a PhD in progress, she works with individuals, couples, and organizations. A TEDx India speaker, she also designs diversity-inclusive wellness and leadership programs for workplaces.",
    },
  ]
}
