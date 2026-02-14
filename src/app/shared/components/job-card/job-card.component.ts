import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-job-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() title!: string;
  @Input() location!: string;
  @Input() description!: string;

  @Input() location2?: string;
  @Input() subdetail?: string;
  @Input() exp?: string;
  @Input() btnlink?: string;


}
