import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { EnterprisesInfoCardComponent, InfoCard } from "../../shared/components/enterprises-info-card/enterprises-info-card.component";
import { EnterprisesCareCardComponent } from "../../shared/components/enterprises-care-card/enterprises-care-card.component";

@Component({
  selector: 'app-enterprises',
  imports: [CommonModule, EnterprisesInfoCardComponent, EnterprisesCareCardComponent],
  templateUrl: './enterprises.component.html',
  styleUrl: './enterprises.component.scss'
})
export class EnterprisesComponent {

  workplaceCards = [
    {
      title: '53%',
      description: 'of employees believe their mental health negatively affects their work productivity'
    },
    {
      title: '52%',
      description: 'feel mentally and physically exhausted by the end of the day'
    },
    {
      title: '66%',
      description: 'worry that revealing mental health struggles to their employer could limit their career growth opportunities'
    },
    {
      title: '77%',
      description: 'of employees fall under a modrate to high mental health risk profile'
    },
  ]

  trackByIndex(index: number): number {
    return index;
  }


  //  info card list 
  cards: InfoCard[] = [
    {
      id: 1,
      title: 'How Employees in Feel',
      description:
        "The workplace can become isolating when mental health challenges are left unaddressed. Here's a snapshot of employee sentiments.",
      stats: ['44% feel isolated', '43% feel anxious', '43% feel depressed'],
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 2,
      title: 'The Role of Stigma in Mental Health',
      description:
        'Stigma extends beyond the workplace, influencing how individuals perceive themselves and their career potential:',
      stats: [
        '62% worry that friends or family would treat them differently if they had a mental health issue.',
        '53% feel negatively about themselves if they face mental health challenges.',
        '66% are concerned that mental health struggles, if known to their employer, could limit their career opportunities.',
      ],
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    },
    {
      id: 3,
      title: 'Building Resilience at Work',
      description:
        'Organizations that prioritize mental well-being see measurable improvements in productivity and employee satisfaction:',
      stats: [
        '78% of employees report higher engagement when mental health is supported.',
        '61% say access to wellness programs reduced their stress levels significantly.',
        '55% feel more loyal to employers who invest in their mental health.',
      ],
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
  ];


  // ===============================
  truncateTitle(title: string, limit = 10): string {
    const words = title.split(' ');
    return words.length > limit
      ? words.slice(0, limit).join(' ') + '...'
      : title;
  }

  heroBtnList = [
    {
      title: 'Borderline Personality Disorder',
      desc: 'Borderline Personality Disorder leads to intense emotional instability and relationship challenges. Individuals may experience mood swings, impulsive actions, and difficulties in self-image, significantly affecting their social and personal lives.'
    },
    {
      title: 'Generalized Anxiety Disorder (GAD)',
      desc: 'GAD is marked by excessive, uncontrollable worry about different aspects of life, persisting for at least six months. Alongside anxiety, individuals may experience fatigue, irritability, and difficulty concentrating, affecting their everyday functioning.'
    },
    {
      title: 'Depression',
      desc: 'Depression manifests as persistent sadness and a lack of interest in activities once enjoyed. It’s not just feeling ‘down’; it encompasses emotional, cognitive, and physical symptoms that can significantly disrupt daily life and well-being.'
    },
    {
      title: 'Social Anxiety Disorder (SAD)',
      desc: 'SAD is characterized by intense fear and anxiety in social situations, leading to avoidance behaviors. Individuals often fear being judged or embarrassed, which may hinder their personal and professional lives significantly.'
    },
    {
      title: 'Bipolar Disorder',
      desc: 'Bipolar disorder entails extreme mood changes, from manic highs to depressive lows. These fluctuations can disrupt a person’s ability to function in daily life and might lead to complications in relationships and personal endeavors.'
    },
    {
      title: 'Obsessive-Compulsive Disorder (OCD)',
      desc: 'OCD consists of unwanted thoughts (obsessions) and repetitive behaviors (compulsions) performed to alleviate anxiety. Common obsessions may include fears of contamination or harm, leading to compulsive actions that can interfere with daily life.'
    },
    {
      title: 'Panic Disorder',
      desc: 'Panic disorder involves recurring panic attacks—sudden episodes of intense anxiety—with no clear triggers. Individuals often develop a fear of situations where you might experience these attacks, which can lead to avoidance and reduced quality of life.'
    },
    {
      title: 'Post-Traumatic Stress Disorder (PTSD)',
      desc: 'PTSD develops following traumatic events and is characterized by flashbacks, nightmares, and severe anxiety. This condition can deeply affect every day functioning and emotional well-being, making support and understanding crucial for recovery.'
    },
  ]

  activeIndex: number | null = null;

  setActive(index: number | null) {
    this.activeIndex = index;
  }

  careCards = [
    {
      title: 'Tailored Programs by Experts',
      desc: 'Our clinical psychologists design programs specific to employees’ mental health needs, blending expertise with personalized, science-backed care for meaningful impact.',
      icon: 'assets/icons/expert.svg'
    },
    {
      title: 'Tailored Programs by Experts',
      desc: 'Our clinical psychologists design programs specific to employees’ mental health needs, blending expertise with personalized, science-backed care for meaningful impact.',
      icon: 'assets/icons/expert.svg'
    },
    {
      title: 'Tailored Programs by Experts',
      desc: 'Our clinical psychologists design programs specific to employees’ mental health needs, blending expertise with personalized, science-backed care for meaningful impact.',
      icon: 'assets/icons/expert.svg'
    },
    {
      title: 'Tailored Programs by Experts',
      desc: 'Our clinical psychologists design programs specific to employees’ mental health needs, blending expertise with personalized, science-backed care for meaningful impact.',
      icon: 'assets/icons/expert.svg'
    },
  ]


}
