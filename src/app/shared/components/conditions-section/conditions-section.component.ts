import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions-section',
  imports: [CommonModule],
  templateUrl: './conditions-section.component.html',
  styleUrl: './conditions-section.component.scss'
})
export class ConditionsSectionComponent {
  conditions = [
    {
      title: 'DEPRESSION',
      desc:
        'A mental health disorder marked by persistent feelings of sadness, hopelessness, and lack of interest in daily activities.',
    },
    {
      title: 'BIPOLAR DISORDER',
      desc:
        'A condition causing extreme mood swings including emotional highs and lows affecting energy and behavior.',
    },
    {
      title: 'PTSD',
      desc:
        'A disorder that develops after experiencing or witnessing a traumatic event causing flashbacks and anxiety.',
    },
    {
      title: 'ANXIETY DISORDER',
      desc:
        'Persistent excessive worry and fear that interferes with daily activities and relationships.',
    },
  ];

  selectedIndex = 0;

  selectCondition(i: number) {
    this.selectedIndex = i;
  }
}
