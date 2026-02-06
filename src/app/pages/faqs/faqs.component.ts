import { Component } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-faqs',
  imports: [NgIf, NgForOf],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  openIndex: number | null = 0;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }


  faqs = [
    {
      question: 'What is Positivty?',
      answer:
        'Positivty is an online platform that provides mental health solutions through pre-designed programs, one-on-one calls, and chat sessions with certified therapists. You can access these services from the comfort of your home through a smartphone, computer, or tablet.',
    },
    {
      question: 'Who is helping me at Positivty?',
      answer:
        'At Positivty, you will be matched with a certified professional therapist. Based on the information inputs from you, the therapist is matched as per your specific needs. At any point during the session, if you are unhappy with the service provided to you, you may choose to match with another therapist.',
    },
    {
      question: 'Who are the therapists at Positivty?',
      answer:
        'The therapists at Positivty are trained and experienced therapists licensed (LPC) from the country they practice. Besides the qualification, they are also provided with additional training to make your experience over the platform flawless. (Link directing to therapists’ profile)',
    },
    {
      question: 'What are the available methods of communication with the therapist?',
      answer: 'Positivty brings forth multiple modes of communication: ➔ Text Message with your therapist. ➔ Live Chat with your therapist. ➔ Voice Call with your therapist. ➔ Video Call with your therapist. You can choose your mode of communication as per your convenience and preferred timing by booking the session over the selected therapist’s profile. Do mention your preferred method of communication while booking the session.',
    },
    {
      question: 'How does the text message feature function?',
      answer: 'Using the text message feature you can communicate with your matched therapists over texts from anywhere. This feature enables you to stay in touch with the therapist 24/7. Since the interaction does not take place in real-time, no session scheduling is required to avail this feature.',
    },
    {
      question: 'How does the live chat feature function?',
      answer: 'Using the live chat feature, you can communicate with your matched therapists over text in real-time. Head over to your therapists page and book a schedule for the session, opt for live chat as the mode of communication.',
    },
    {
      question: 'How does the voice call feature function?',
      answer: 'Using the voice call feature you can communicate with your therapist over telephone support. Head over to your therapists page and book a schedule for the session, opt for voice call as the mode of communication.',
    },
    {
      question: 'How does the video call feature function?',
      answer: 'Using the video call feature, you can communicate with your therapist face-to-face with the integrated Zoom video call facility. Head over to your therapist’s page and book a schedule for the session, opt for a video call as the mode of communication.',
    },
    {
      question: 'How much will a session cost me?',
      answer: 'The rates regarding a session depend on the therapist and the duration. As you head to the therapist profile to book a session, the rates regarding the same will be displayed. It may vary according to the therapist.',
    },
    {
      question: 'How long should I use Positivty for results?',
      answer: 'The mental health solution is a very personal journey. The time duration taken by each to reach a better stage varies. You may use Positivty as per your behavioral choice but the duration of the sessions is generally decided by your therapist.',
    }
  ];

  faqsList = [
    {
      question: 'Where should I incorporate my business?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
    {
      question: 'I find market research reports?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
    {
      question: 'social distancing and how can we do that?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
    {
      question: 'What type of company is measured?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
    {
      question: 'How can I safely use cleaning chemicals?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
    {
      question: 'Where should I incorporate my business?',
      answer: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.',
    },
  ]

}
