import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-struggle-card',
  imports: [CommonModule],
  templateUrl: './struggle-card.component.html',
  styleUrl: './struggle-card.component.scss'
})
export class StruggleCardComponent {
  @Input() title: string = '';
  @Input() items!: string[];
}
