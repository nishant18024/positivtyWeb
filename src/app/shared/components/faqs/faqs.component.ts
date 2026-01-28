import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface FaqItem {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})

export class FaqComponent {



  @Input() faqs: FaqItem[] = [];
  @Input() defaultOpenIndex: number = -1;

  openIndex: number = -1;

  ngOnInit() {
    this.openIndex = this.defaultOpenIndex;
  }

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? -1 : i;
  }
}
