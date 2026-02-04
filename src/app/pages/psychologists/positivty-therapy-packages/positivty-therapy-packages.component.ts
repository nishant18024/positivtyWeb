import { Component } from '@angular/core';
import { PackagePlanCardComponent } from "../../../shared/components/package-plan-card/package-plan-card.component";
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-positivty-therapy-packages',
  imports: [PackagePlanCardComponent, NgFor],
  templateUrl: './positivty-therapy-packages.component.html',
  styleUrl: './positivty-therapy-packages.component.scss'
})
export class PositivtyTherapyPackagesComponent {
  packagesPlans = [
    {
      image: '/assets/doremon.jpg',
      title: 'From Reaction to Regulation: Regulating Anger, Anxiety & Fear',
      name: 'Mrs Sudha Sundaram',
      qualification: 'MSc Psychology',
      price: 900,
      location: 'Chennai, India',
      languages: 'English, Hindi',
      sessions: 3,
      mode: 'Via Video',
      rating: 4,
    },
    {
      image: '/assets/doremon.jpg',
      title: 'From Reaction to Regulation: Regulating Anger, Anxiety & Fear',
      name: 'Mrs Sudha Sundaram',
      qualification: 'MSc Psychology',
      price: 900,
      location: 'Chennai, India',
      languages: 'English, Hindi',
      sessions: 3,
      mode: 'Via Video',
      rating: 4,
    }
  ]
}
