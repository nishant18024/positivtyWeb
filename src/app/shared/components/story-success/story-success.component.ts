import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryFormData } from '../models/story.models';

export interface NextStep {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-story-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-success.component.html',
  styleUrl: './story-success.component.scss'
})
export class StorySuccessComponent {
  @Input() formData!: StoryFormData;
  @Input() fullName = '';

  readonly steps: NextStep[] = [
    {
      title: 'Confirmation Sent',
      desc: 'You will receive a confirmation in your email shortly.',
    },
    {
      title: 'Story Review',
      desc: 'Our team at Positivty will carefully review your submission to ensure it aligns with our content guidelines.',
    },
    {
      title: 'Review Update',
      desc: 'You will be notified about the outcome of the review process via email.',
    },
    {
      title: 'Story Publication',
      desc: 'If approved, your story will be published on Positivty.com and shared with our community.',
    },
  ];
}