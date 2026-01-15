import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from "../../ui-button/ui-button.component";

@Component({
  selector: 'app-life-stage-card',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './life-stage-card.component.html',
  styleUrl: './life-stage-card.component.scss'
})

export class LifeStageCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() reverse: boolean = false; // for alternating layout
}
