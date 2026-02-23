import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  imports: [CommonModule],
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.scss'
})
export class WebinarCardComponent {
  @Input() image!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() recorded: boolean = false;
  @Input() upcoming: boolean = false;
  @Input() btnText!: string;
  @Input() selected: boolean = false;
  @Output() selectionToggle = new EventEmitter<void>();

  onToggle(event: Event) {
    event.stopPropagation();
    this.selectionToggle.emit();
  }
}
