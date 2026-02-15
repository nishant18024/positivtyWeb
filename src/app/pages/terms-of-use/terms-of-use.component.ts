import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  imports: [CommonModule],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent {
  sections = [
    { id: 'definitions', title: 'Definitions' },
    { id: 'services', title: 'The Services' },
    { id: 'user-agreement', title: 'User Agreement' },
    { id: 'termination', title: 'Termination of Agreement' },
    { id: 'tax', title: 'Tax Obligations of Therapists' },
    { id: 'privacy', title: 'Privacy and Security' },
    { id: 'ip', title: 'Intellectual Property' },
    { id: 'submissions', title: 'User Forums & Submissions' },
    { id: 'arbitration', title: 'Arbitration' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'export', title: 'Export Controls' },
    { id: 'notices', title: 'Notices' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact', title: 'Contact Information' },
  ];
}
