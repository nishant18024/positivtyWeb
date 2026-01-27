import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aeneralized-anxiety',
  imports: [CommonModule, NgFor],
  templateUrl: './aeneralized-anxiety.component.html',
  styleUrl: './aeneralized-anxiety.component.scss'
})
export class AeneralizedAnxietyComponent {

 therapies = [
    {
      icon: '🧠',
      title: 'Cognitive Behavioural Therapy (CBT)',
      desc:
        'A structured therapy that identifies and rewires destructive thought patterns fueling manic impulses and depressive spirals.',
      points: [
        '<b>Manic Phase Focus:</b> Teaches pause techniques to interrupt reckless decisions (e.g., 48-hour spending delay rules)',
        '<b>Depressive Phase Focus:</b> Challenges all-or-nothing thoughts like "I’m a failure"',
        '<b>Neuroplasticity Boost:</b> Strengthens prefrontal cortex connections to improve emotional regulation',
      ],
    },
    {
      icon: '⏱️',
      title: 'Interpersonal & Social Rhythm Therapy (IPSRT)',
      desc:
        'A circadian-focused therapy that stabilizes daily routines to prevent episodes.',
      points: [
        '<b>Social Rhythm Metric:</b> Tracks sleep, meals, and social interactions — irregularities predict mood shifts',
        '<b>Zeitgeber Theory:</b> Aligns biological clocks using consistent wake/light/exercise times',
        '<b>Relationship Repair:</b> Addresses conflicts triggered by manic/depressive behaviours',
      ],
    },
    {
      icon: '💊',
      title: 'Interpersonal Therapy (IPT)',
      desc:
        'Customized pharmacotherapy guided by genetic testing and symptom patterns.',
      points: [
        '<b>Mood Stabilizers:</b> Lithium (reduces suicidal ideation by 50%) or Lamotrigine (for bipolar depression)',
        '<b>Antipsychotics:</b> Aripiprazole controls manic psychosis without sedation',
        '<b>GeneSight Testing:</b> Avoids trial-and-error by predicting medication responses',
      ],
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family-Focused Therapy (FFT)',
      desc: 'A 12-week program educating families on bipolar management.',
      points: [
        '<b>Crisis Blueprinting:</b> Teaches loved ones to de-escalate manic rage or suicidal talk',
        '<b>Communication Training:</b> Replaces criticism with "I" statements',
        '<b>Relapse Prevention:</b> Family becomes a "mood detective" for early symptoms',
      ],
    },
  ];

  sections = [
    {
      no: '01',
      title: 'Crisis Prevention That Acts Faster Than Mania',
      points: [
        'Real-Time Messaging: Send a chat during manic urges (e.g., shopping sprees) for instant coping strategies',
        'Safety Contracts: Therapists collaborate on a "manic emergency plan" with loved ones',
        'Mood Stabilizer Alerts: Reminders to take meds, adjusted for circadian rhythms',
      ],
      stat: '83% of users avoid hospitalization during manic phases with our crisis protocols',
      statSide: 'right',
    },
    {
      no: '02',
      title: 'Relapse Prediction Powered by AI',
      points: [
        'Speech Analysis: AI detects rapid speech (a mania precursor) during video sessions',
        'Sleep Tracking: Wearables flag irregular sleep patterns tied to hypomania',
        'Personalized Alerts: "Your sleep dropped 2 hours – let’s adjust your IPSRT plan."',
      ],
      stat: 'Early intervention reduces episode severity by 65% (Journal of Bipolar Disorders)',
      statSide: 'left',
    },
    {
      no: '03',
      title: 'Holistic Care That Targets Root Causes',
      points: [
        'Nutrition Plans: Omega-3s and magnesium to reduce brain inflammation',
        'Sleep Coaching: CBT-I techniques to regulate circadian rhythms',
        'Movement Therapy: Yoga to lower cortisol during mixed episodes',
      ],
      stat: '72% report stabilized moods after 3 months of integrated care',
      statSide: 'right',
    },
    {
      no: '04',
      title: 'Fewer Hospitalizations, More Life',
      points: [
        'Mood Stabilizer Optimization: Genetic testing ensures meds work with your biology',
        'Family Training: Loved ones learn to de-escalate crises at home',
        'Peer Support Groups: Connect with others managing rapid cycling or bipolar II',
      ],
      stat: '80% of users cut hospitalizations by 50% within 6 months',
      statSide: 'left',
    },
  ];

  openIndex = -1;

  faqs = [

    {
      q: 'Is bipolar disorder curable? What does long-term recovery look like?',
      a: {
        title:
          'While bipolar disorder is a lifelong condition, remission is absolutely possible. With proper treatment:',
        firstList: [
          '70–80% of patients achieve significant symptom reduction',
          'Key to success: Combining mood stabilizers (like Lithium) with therapies that target your specific bipolar type (e.g., IPSRT for circadian rhythm regulation)',
          'Our 5-Minute Bipolar Screener Can Help Clarify — Take It Anonymously',
        ],
        secondTitle:
          'At Positivty, we focus on helping you build "inter-episode wellness" — not just crisis management. Many of our clients maintain stability for years through:',
        secondList: [
          'Therapies that target your specific bipolar type',
          'Regular therapy "tune-ups"',
          'Lifestyle adjustments (sleep hygiene, stress buffers)',
          'Early-warning symptom tracking',
        ],
      },
    },

  ]





  toggle(i: number) {
    this.openIndex = this.openIndex === i ? -1 : i;
  }
}
