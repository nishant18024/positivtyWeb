import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss'
})
export class TermsAndConditionsComponent {
  sections = [
    { id: 'definitions', title: 'Definitions' },
    { id: 'services', title: 'The Services' },
    { id: 'platform-fees', title: 'Platform Fees' },
    { id: 'online-sessions', title: 'Fees for Online Sessions' },
    { id: 'privacy', title: 'Privacy and Security' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'user-content', title: 'User Content' },
    { id: 'third-party', title: 'Third Party Content' },
    { id: 'disclaimer', title: 'Disclaimer of Warranty and Limitation of Liability' },
    { id: 'forums', title: 'User Forums, Topics, Replies, Comments, Feedback and Other Submissions' },
    { id: 'arbitration', title: 'Arbitration' },
    { id: 'opt-out', title: 'Right to Opt-Out of Arbitration' },
    { id: 'free-trials', title: 'Free or Discounted Trials' },
    { id: 'package-deals', title: 'Package Deals' },
    { id: 'webinars', title: 'Webinars, Seminars and Other Awareness-Building Initiatives' },
    { id: 'account', title: 'Your Account, Representations, Conduct and Commitments' },
    { id: 'payments', title: 'Payments To Therapists' },
    { id: 'modifications', title: 'Modifications, Termination, Interruption and Disruptions to the Platform' },
    { id: 'export', title: 'Export Controls and Sanctions' },
    { id: 'notices', title: 'Notices' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'important-notes', title: 'Important Notes about our Agreement' },
    { id: 'governing-law', title: 'Governing Law and Jurisdiction' },
    { id: 'contact', title: 'Contact Information' },
  ];
}
