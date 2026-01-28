import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqComponent } from "../../../shared/components/faqs/faqs.component";
import { StepCardComponent } from "../../../shared/components/step-card/step-card.component";
import { title } from 'process';
import { GiftASessionCardComponent } from "../../../shared/components/gift-a-session-card/gift-a-session-card.component";
import { reverse } from 'dns';

@Component({
  selector: 'app-gift-a-session',
  imports: [CommonModule, FaqComponent, StepCardComponent, GiftASessionCardComponent],
  templateUrl: './gift-a-session.component.html',
  styleUrl: './gift-a-session.component.scss'
})
export class GiftASessionComponent {

  senderSteps = [
    {
      icon: '',
      title: 'Complete the Invitation Form',
      desc: 'Provide us your receiver’s details, add a personal note, and select a value to gift. You can also choose to remain anonymous'
    },
    {
      icon: '',
      title: `Review the Information`,
      desc: 'Check the information for accuracy, modify if required by clicking Modify, or click on Confirm & Pay to proceed.'
    },
    {
      icon: '',
      title: 'Personalized E-Coupon',
      desc: 'Positivty will send a coupon with your personalized message via e-mail to the recipient on your behalf. You will receive a notification as well.'
    }
  ]
  receiverSteps = [
    {
      icon: '',
      title: 'Register/Login',
      desc: 'Login on Positivty.com, if you already have an account or register.'
    },
    {
      icon: '',
      title: `Choose Therapist And Services`,
      desc: 'Find available therapist and services based on your mental health condition or other criteria, such as gender of the therapist'
    },
    {
      icon: '',
      title: 'Pick the Time Slot',
      desc: 'Select an available time slot for your online therapy session that best fits your schedule'
    },
    {
      icon: '',
      title: 'Use your E-Coupon',
      desc: 'At the payment screen, enter the e-coupon code you received. If the value exceeds the coupon value, top up the difference'
    },
    {
      icon: '',
      title: 'Start Your Healing Journey',
      desc: 'You’re all set! Remember to attend the session at your selected time and look out for notifications from us'
    },
  ]


  whyGiftASession = [
    {
      image: 'https://www.positivty.com/assets/img/Loved-Ones.png',
      title: 'Your Loved Ones Need You',
      description: 'Observe those around you. Not everyone can cope with personal loss, relationship turmoil, or financial struggles. Nor they always turn to therapy for support in these critical times. Yet, you have the power to guide them towards a more hopeful path',
      reverse: false,
    },
    {
      image: 'https://www.positivty.com/assets/img/RenownedTherapists.png',
      title: 'Renowned Therapists',
      description: 'Access a network of accredited and certified therapists, experienced in various mental health conditions such as anxiety, stress depression, Attention Deficit Hyperactivity Disorder (ADHD), Post Traumatic Stress Disorder (PTSD), and several others',
      reverse: true,
    },
    {
      image: 'https://www.positivty.com/assets/img/FreedomofChoice.png',
      title: 'Freedom of Choice',
      description: 'Positivty empower recipient to browse therapist profiles, reviewing their qualifications and specialties, and select the one that suits them best. For subsequent sessions, they can select other therapists or stay with their earlier choice',
      reverse: false,
    },
    {
      image: 'https://www.positivty.com/assets/img/FlexibleScheduling.png',
      title: 'Flexible Scheduling',
      description: 'Book therapy sessions with ease, choosing from available slots to match your convenience. Whether it be early morning or late evening, slots are available for weekends and even for public holidays.',
      reverse: true,
    },
    {
      image: 'https://www.positivty.com/assets/img/Easy-Quick-Secure.png',
      title: 'Easy, Quick & Secure',
      description: 'From selecting the therapist to scheduling the session, online therapy with Positivty is simple, fast, and secure. All communications are protected with the highest level of encryption.',
      reverse: false,
    }
  ]









  faqs = [
    {
      q: 'How does Gift-a-Session work?',
      a: 'Simply fill the invitation form, review the details and pay the amount to send an e-coupon to your receiver’s email alias. We will notify the receiver and send them a coupon for the exact amount you paid for. Your receiver will be able to book their mental health session online by registering on our platform, searching for a therapist, choosing therapy services, picking a time slot and booking a session. The recipient will not need to pay should your coupon cover the cost of the therapy session. If the cost of the therapy session exceeds the coupon value, the recipient, will need top up the difference.'
    },
    {
      q: 'Can the recipient choose their own therapist?',
      a: 'Yes! When you gift a session through Positivty, the recipient has the freedom to choose from our network of professional therapists, ensuring they find the right professional to address their specific needs. You can review therapist profiles and choose based on their specialization, gender, experience, and availability.'
    },
    {
      q: 'How much does a Positivty gift-a-session cost?',
      a: 'Yes, therapy sessions on Positivty are affordable and designed to be accessible to everyone. We offer competitive pricing, so you can gift mental health support without worrying about high costs, ensuring your loved one gets the help they need. Check each therapist’s pricing options to find the right therapist for you.'
    },
    {
      q: 'Can the therapy session be rescheduled?',
      a: 'Yes, the therapy sessions can be rescheduled by the recipient. However, it is subjected to conditions.'
    },
    {
      q: 'Is online therapy as effective as in-person therapy?',
      a: 'Yes! Our licensed therapists offer high-quality, secure, and confidential online therapy sessions, delivering the same or higher level of care as face-to-face therapy.'
    },
    {
      q: 'Will the recipient have to pay any amount after I make the payment?',
      a: 'In case the recipient chooses a therapy session which is of higher value than the amount of the coupon, the recipient will be required to top up the amount to complete the transaction and successfully book a session. Alternatively, the recipient can choose a therapist or a session that is priced lower.'
    },
    {
      q: 'What mental health concerns can therapy help with?',
      a: 'Our therapists can help with a wide range of issues, including stress, anxiety, depression, relationship problems, trauma, emotional and behavioural changes, relationship challenges, and more.'
    },
  ];

}
