import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationStatsCardComponent } from '../../shared/components/education-stats-card/education-stats-card.component';
import { StruggleCardComponent } from '../../shared/components/struggle-card/struggle-card.component';
import { DisorderCardComponent } from "../../shared/components/disorder-card/disorder-card.component";
import { MentalHealthCard } from "../../shared/components/mental-health-card/mental-health-card.component";
import { PrioritizeStudentMentalHealthComponent } from "../../shared/components/prioritize-student-mental-health/prioritize-student-mental-health.component";
import { MentalHealthAdvantageCardSectionComponent } from "../../shared/components/mental-health-advantage-card-section/mental-health-advantage-card-section.component";
import { AdvancedFunctionalitiesSectionComponent } from "../../shared/components/advanced-functionalities-section/advanced-functionalities-section.component";
import { FaqComponent, FaqItem } from "../../shared/components/faqs/faqs.component";
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    EducationStatsCardComponent,
    StruggleCardComponent,
    DisorderCardComponent,
    PrioritizeStudentMentalHealthComponent,
    MentalHealthAdvantageCardSectionComponent,
    AdvancedFunctionalitiesSectionComponent,
    FaqComponent,
    FeatureCardComponent

  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  // ===============================
  // Silent Struggles Data
  // ===============================

  challenges = [
    {
      percentage: '13%',
      description:
        '1 in 7 children aged 3–17 (13%) has a diagnosed mental or behavioral condition.',
      imageUrl:
        'https://positivtystaticassets.blob.core.windows.net/images/education/silentstruggles/behavioral-condition.jpeg'
    },
    {
      percentage: '13%',
      description:
        '1 in 7 children aged 3–17 (13%) has a diagnosed mental or behavioral condition.',
      imageUrl:
        'https://positivtystaticassets.blob.core.windows.net/images/education/silentstruggles/higher-prevalence.jpeg'
    }
  ];

  // ===============================
  // Warning Signs Slider
  // ===============================

  currentIndex = 0;

  cards: string[][] = [
    [
      'Persistent sadness lasting two or more weeks',
      'Avoidance of social interactions',
      'Self-harm or talking about hurting oneself'
    ],
    [
      'Mentioning thoughts of death or suicide',
      'Frequent mood swings',
      'Dangerous out-of-control behaviour'
    ],
    [
      'Unexplained weight loss',
      'Difficulty sleeping',
      'Declining academic performance'
    ]
  ];

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.cards.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) %
      this.cards.length;
  }

  // ===============================
  // Struggle Cards Slider
  // ===============================

  struggleCardsCurrentIndex = 0;
  private struggleInterval: ReturnType<typeof setInterval> | null = null;

  struggleCards = [
    {
      title: 'Recent Statistics',
      items: [
        '21% reported symptoms of anxiety',
        '17% reported symptoms of depression',
        '40% felt persistent sadness',
        '20% seriously considered suicide',
        '9% attempted suicide'
      ]
    },
    {
      title: 'Unmasking Harmful Perceptions',
      items: [
        "You're just being dramatic",
        "You're lazy or unmotivated",
        "You should just get over it",
        "Fear of judgment",
        "Bullying tied to struggles"
      ]
    }
  ];

  struggleCardsnext() {
    this.struggleCardsCurrentIndex =
      (this.struggleCardsCurrentIndex + 1) %
      this.struggleCards.length;

    this.restartAutoSlide();
  }

  struggleCardsprev() {
    this.struggleCardsCurrentIndex =
      (this.struggleCardsCurrentIndex - 1 + this.struggleCards.length) %
      this.struggleCards.length;

    this.restartAutoSlide();
  }

  // ===============================
  // Auto Slide Logic
  // ===============================

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startStruggleAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopStruggleAutoSlide();
  }

  startStruggleAutoSlide() {
    if (this.struggleInterval) return; // prevent duplicate intervals

    this.struggleInterval = setInterval(() => {
      this.struggleCardsCurrentIndex =
        (this.struggleCardsCurrentIndex + 1) %
        this.struggleCards.length;
    }, 4000);
  }

  stopStruggleAutoSlide() {
    if (this.struggleInterval) {
      clearInterval(this.struggleInterval);
      this.struggleInterval = null;
    }
  }

  restartAutoSlide() {
    this.stopStruggleAutoSlide();
    this.startStruggleAutoSlide();
  }

  // disorder list
  disorders = [
    {
      title: 'Anxiety Disorders',
      description:
        'Children with anxiety disorders experience overwhelming and uncontrollable fears that interfere with their daily lives. Conditions such as social anxiety, generalized anxiety, and obsessive-compulsive disorder (OCD) can hinder their ability to engage in school, play, and social interactions.',
      image:
        'https://positivtystaticassets.blob.core.windows.ne…ucation/understandingminds/anxiety-disorders.jpeg'
    },
    {
      title: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description:
        'ADHD makes it difficult for children to focus, control impulses, or remain still. This condition often leads to challenges in learning and behaviour, manifesting as inattention, hyperactivity, or a mix of both.',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/education/adhd.jpeg'
    },
    {
      title: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description:
        'ADHD makes it difficult for children to focus, control impulses, or remain still. This condition often leads to challenges in learning and behaviour, manifesting as inattention, hyperactivity, or a mix of both.',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/education/adhd.jpeg'
    },
    {
      title: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description:
        'ADHD makes it difficult for children to focus, control impulses, or remain still. This condition often leads to challenges in learning and behaviour, manifesting as inattention, hyperactivity, or a mix of both.',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/education/adhd.jpeg'
    },
    {
      title: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description:
        'ADHD makes it difficult for children to focus, control impulses, or remain still. This condition often leads to challenges in learning and behaviour, manifesting as inattention, hyperactivity, or a mix of both.',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/education/adhd.jpeg'
    },
    {
      title: 'Autism Spectrum Disorder (ASD)',
      description:
        'ASD is a developmental condition that affects communication, behaviour, and social interaction. Symptoms often appear before age 3 and can range from mild to severe.',
      image:
        'https://positivtystaticassets.blob.core.windows.net/images/education/autism.jpeg'
    }
  ];

  showAll = false;

  get visibleDisorders() {
    return this.showAll ? this.disorders : this.disorders.slice(0, 3);
  }

  toggleShow() {
    this.showAll = !this.showAll;
  }

  // mental health cards list
  mentalHealthCards: MentalHealthCard[] = [
    {
      title: 'The Prevalence of Mental Health Challenges',
      points: [
        { text: '40% of students encounter mental health issues.', source: 'NCERT Survey' },
        { text: '81% of Indian students cite exams as major stress sources.', source: 'NCERT Survey' },
        { text: 'Mindfulness helps students focus and manage stress better.', source: 'NCERT Survey' }
      ]
    },
    {
      title: 'Coping Strategies for Students',
      points: [
        { text: 'Regular physical activity reduces depression and anxiety.', source: 'WHO Report' },
        { text: 'Talking to a counselor can significantly reduce stress.' },
        { text: '8–10 hours of sleep improves emotional regulation.', source: 'Sleep Foundation' }
      ]
    },
    {
      title: 'Support Resources',
      points: [
        { text: 'iCall helpline provides free mental health support to students.' },
        { text: 'School counselors help students navigate academic and emotional challenges.' }
      ]
    }
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



  // ========================

  faqData: FaqItem[] = [
    {
      q: 'How Does a School/University Mental Health Wellness Program Work?',
      a: [
        "Mental health wellness programs are structured to ensure ease of implementation for institutions while providing comprehensive care for students. Here's how the process unfolds for both schools/universities and students: For Schools/Universities The wellness program begins with a consultation phase, where Positivty works closely with the school or university to understand their unique challenges and requirements. This involves identifying the specific mental health needs of students, faculty, and staff. Based on these insights, a customized wellness package is designed to include services such as psychometric evaluations, workshops, one-on-one therapy, and group sessions.",
        'Once the package is finalized, Positivty ensures smooth integration by providing the institution with the necessary tools, resources, and training to implement the program. Administrators are given access to a centralized dashboard where they can monitor utilization rates, analyze reports, and make adjustments to the services as needed. Regular check-ins and reviews are conducted to ensure the program is effective, relevant, and aligned with the evolving needs of the institution.',
        'For Students For students, the program offers a seamless and accessible experience. After the wellness program is introduced, students are provided with clear instructions on how to access the services, whether it’s signing up for therapy sessions, attending workshops, or reaching out to the 24/7 helpline.',
        'Students can book confidential one-on-one therapy sessions with licensed therapists through an easy-to-use online platform. Group therapy sessions and in-person support options, such as Therapy∀School or Therapy∀Home, are also made available based on their preferences. The program ensures that students feel comfortable and safe throughout the process, fostering a sense of trust and encouraging them to seek help when needed.',
        'Positivty also emphasizes awareness and education by conducting workshops to equip students with the knowledge to recognize signs of stress, anxiety, or burnout in themselves and their peers. By offering a wide range of flexible and student-centric services, the program empowers students to prioritize their mental well-being without any stigma or hesitation.',
        'This dual-focused approach ensures that the mental health needs of both institutions and students are met effectively, creating a supportive and nurturing environment for everyone involved.',
      ]
    },
    {
      q: 'What seervices are included in a mental health wellness package for schools and universities?',
      a: [
        'Positivty’s mental health wellness packages are thoughtfully designed to address the diverse needs of students and faculty. Our offerings include:',
        'Psychometric Testing & Evaluation: These tests help schools and universities assess students’ mental health and identify those who may need additional support. This ensures timely intervention and care. Awareness Workshops: We conduct interactive workshops to teach students about mental health, recognizing symptoms of stress or anxiety, and coping strategies that can help in challenging situations. One-on-One Therapy Sessions:Students can book confidential online therapy sessions with certified therapists for personalized support. Group Therapy: Small groups of students facing common challenges, such as academic stress or bullying, can come together to share experiences and learn coping mechanisms in a supportive environment. Therapy∀School and Therapy∀Home: For students who prefer face-to-face interaction, we provide in-person therapy sessions either on campus or at home, ensuring convenience and comfort. 24x7 Helpline: Our round-the-clock helpline allows students to access immediate support whenever they feel overwhelmed or in crisis.',
        'These services are customizable, allowing schools and universities to select the ones that best suit their students’ needs, ensuring a comprehensive and effective approach to mental health care.'
      ]
    },
    {
      q: 'Why is mental health important for students?',
      a: ['Mental health plays a critical role in a student’s ability to learn, interact socially, and handle academic and personal pressures. A healthy mind allows students to stay focused, retain information better, and develop strong problem-solving skills. On the other hand, poor mental health can lead to challenges such as low grades, difficulty forming relationships, and even physical health problems like fatigue or frequent illnesses.',
        'At Positivty, we recognize that mental health is as important as physical health. By providing resources like therapy sessions, workshops, and 24/7 support, we aim to reduce stress, improve confidence, and help students build the emotional resilience needed to thrive. Schools and universities that prioritize mental wellness create an environment where students feel supported, motivated, and empowered to achieve their best.'
      ]
    },

  ];

  // ===============================

  features = [
  {
    title: "Early in School Support",
    subtitle: "Guiding Students Through Crucial Transition Periods",
    description: "The first 90–180 days in a new school environment are vital for a student’s emotional and academic growth. Our programs offer targeted support to help students adjust to new peers, teachers, and surroundings, ensuring they feel confident and included."
  },
  {
    title: "Institution-Wide Mental Health Assessment",
    subtitle: "Holistic Insights for a Growing Campus",
    description: "Conduct annual comprehensive evaluations to analyze the mental health dynamics across your institution. This proactive assessment helps identify challenges and create data-driven strategies to improve student well-being."
  },
  {
    title: "Mental Health Awareness Workshops",
    subtitle: "Building a Culture of Understanding and Empathy",
    description: "Interactive workshops educate students and faculty on recognizing mental health symptoms, understanding therapy, and exploring treatment options. Topics include:"
  },
  {
    title: "1-on-1 Online Therapy",
    subtitle: "Safe, Private, and On-Demand Support",
    description: "Connect students with qualified and certified therapists for confidential one-on-one online sessions. These sessions are tailored to individual needs and are conducted in a secure environment, ensuring complete privacy."
  },
  {
    title: "Gift a Session (School/Universities)",
    subtitle: "Support When It’s Needed Most",
    description: "Empower students to uplift their peers by gifting therapy sessions during challenging times. Whether it's due to personal loss, financial difficulties, or other stressors, this unique offering fosters community support and resilience."
  },
  {
    title: "Group Therapy Sessions",
    subtitle: "Shared Healing Through Collective Growth",
    description: "Small groups of students with shared concerns, such as academic underperformance or social challenges like bullying, work together in a supportive setting to overcome obstacles and build coping mechanisms."
  },
  {
    title: "Therapy @ School",
    subtitle: "Therapy Accessible On-Campus",
    description: "Offer in-person therapy sessions within your school or university premises. Whether scheduled weekly or monthly, these face-to-face interactions create a convenient and approachable support system for students."
  },
  {
    title: "Therapy @ Home",
    subtitle: "Support Delivered to Your Doorstep",
    description: "For students experiencing severe mental health issues or those unable to attend sessions on-campus or online, we provide face-to-face therapy sessions at home. This personalized care ensures no one is left behind."
  },
  {
    title: "24x7 Helpline",
    subtitle: "Round-the-Clock Support",
    description: "Our emergency helpline is available 24/7, 365 days a year, connecting students to qualified therapists in times of urgent need. Help is always just a call away."
  },
];

}
