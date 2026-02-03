import { Component } from '@angular/core';
import { TherapistCardComponent } from "../../../shared/components/therapist-card/therapist-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-positivty-psychologists',
  imports: [CommonModule, TherapistCardComponent],
  templateUrl: './view-positivty-psychologists.component.html',
  styleUrl: './view-positivty-psychologists.component.scss'
})
export class ViewPositivtyPsychologistsComponent {

  therapistList = [
    {
      image: '/assets/doremon.jpg',
      name: 'Doremon',
      title: 'Clinical Psychologist',
      location: 'Pilkhuwa, India',
      rating: 4.5,
      segment: ['Children', 'Couples'],
      expertise: ['Anxiety', 'Depression', 'Relationship Issues'],
    },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
    { image: '/assets/doremon.jpg', name: 'Doremon', title: 'Clinical Psychologist', location: 'Pilkhuwa, India', rating: 4.5, segment: ['Children', 'Couples'], expertise: ['Anxiety', 'Depression', 'Relationship Issues'] },
  ];
}
