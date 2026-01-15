import { Component, Input } from '@angular/core';
import { UiButtonComponent } from "../../ui-button/ui-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-therapy-card',
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './therapy-card.component.html',
  styleUrl: './therapy-card.component.scss'
})

export class TherapyCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText: string = 'Book a Session';
}
