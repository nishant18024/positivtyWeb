import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-conditions-section',
  imports: [CommonModule],
  templateUrl: './conditions-section.component.html',
  styleUrl: './conditions-section.component.scss'
})
export class ConditionsSectionComponent {
  conditions = [
    {
      title: 'Depression',
      desc:
        'A mental health disorder marked by persistent feelings of sadness, hopelessness, and a lack of interest in daily activities.',
    },
    {
      title: 'Bipolar Disorder',
      desc:
        'A condition involving extreme mood swings, ranging from episodes of intense highs (mania) to severe lows (depression).',
    },
    {
      title: 'Post-Traumatic Stress Disorder (PTSD)',
      desc:
        'A mental health condition triggered by experiencing or witnessing traumatic events, leading to flashbacks, nightmares, and heightened anxiety',
    },
    {
      title: 'Schizophrenia',
      desc:
        'A chronic mental disorder affecting perception, thought processes, and behaviour, often resulting in hallucinations and delusions.',
    },
    {
      title: 'Generalised Anxiety Disorder (GAD)',
      desc: 'Excessive and uncontrollable worry about everyday situations, often accompanied by physical symptoms like restlessness and fatigue'
    },
    {
      title: 'Disruptive Behaviour and Dissocial Disorder',
      desc: 'Conditions characterized by persistent patterns of hostile, defiant, or antisocial behaviour that disrupt relationships and social norms'
    },
    {
      title: 'Adjustment Disorder',
      desc: 'Emotional or behavioural responses to significant life changes or stressful events, causing difficulty in coping'
    },
    {
      title: 'Eating Disorder',
      desc: 'Serious mental health conditions involving disordered eating behaviours, such as anorexia nervosa or bulimia nervosa, that impact physical and emotional health'
    },
    {
      title: 'Neurodevelopmental Disorder',
      desc: 'A group of conditions, such as autism spectrum disorder and ADHD, that affect brain development, impacting learning, communication, and social interaction.'
    },
    {
      title: 'Addictions',
      desc: 'A dependency on substances or behaviours that disrupt daily life and mental health.'
    },
    {
      title: 'Anger Management',
      desc: 'Challenges with controlling anger, leading to frequent outbursts or difficulty maintaining emotional balance'
    },
    {
      title: 'Autism Spectrum Disorder',
      desc: 'A range of developmental conditions affecting communication, behaviour, and social interaction, varying widely in severity.'
    },
    {
      title: 'Panic Disorder',
      desc: '​Recurring episodes of intense fear or discomfort, often accompanied by physical symptoms like rapid heartbeat or dizziness'
    },
    {
      title: 'Dysthymia',
      desc: 'A chronic, low-grade form of depression that persists for an extended period, affecting mood and daily functioning.​'
    },

  ];

  selectedIndex = 0;

  selectCondition(i: number) {
    this.selectedIndex = i;
  }
}
