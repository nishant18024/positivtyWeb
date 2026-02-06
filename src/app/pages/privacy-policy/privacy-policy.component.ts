import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  breadcrumb = {
    home: 'Home',
    current: 'Privacy Policy'
  };

  introduction = [
    'Positivty is committed to safeguarding the confidentiality and privacy of the personal information and health data entrusted to us. In order to ensure transparency and compliance with applicable laws and regulations, we have established this Privacy Policy, which outlines our policies and procedures regarding the collection, use, and disclosure of Personal Information from users. By accessing our website, mobile application(s), or using our related services, you acknowledge that you have reviewed and understood the terms of this Privacy Policy and agree to be bound by its provisions.',
    'To protect the confidentiality of client information, we maintain the anonymity of our clients and operate in accordance with strict confidentiality policies to ensure that all personal and health data received is stored, processed, and transmitted in a highly secure environment that meets industry standards for data protection. Please note that it is recommended that you do not use our website, mobile application(s), or services if any provision of this Privacy Policy conflicts with the laws of your country of residence.'
  ];

  sections: any[] = [];

  ngOnInit() {
    this.sections = [
      {
        title: 'Definitions',
        subsections: [
          {
            title: 'Company',
            content: 'Positivty, "positivty.com", "Company", "Firm", "we", "our", "us", "Service Provider" or similar terminology are all in reference to Positivty. as a provider of Services for the remainder of this document.'
          },
          {
            title: 'User',
            content: '"Client", "user", "you", "your" or other similar terminology are all in reference to you, as the user of the website, mobile application(s) and as a recipient of our Services and resources for the remainder of this document.'
          },
          {
            title: 'Platform',
            content: '"Platform" or similar terminology are all in reference to any mobile app, website or web links that the User can employ to access Services provided by the Company.'
          },
          {
            title: 'Counsellors',
            content: 'The terms "Therapist", "Counsellor", "Psychologist", "Wellness Advisor", "Expert", "Doctor", "Consultant" or similar terminology all refer to the Therapist.'
          }
        ]
      },
      {
        title: 'Nature of Service',
        content: 'Positivty is a professional platform that provides user-friendly services for individuals and organizations to address mental health concerns by connecting users with leading therapists worldwide. Our services are designed to promote mental wellness and include but are not limited to:',
        list: [
          'Online and in-person consultations with licensed therapists authorized by Positivty to utilize the platform for providing their services;',
          'Periodic self-assessments and psychological tests;',
          'Workshops and webinars delivered by trained therapists;',
          'Self-help tools, content, and programs are disseminated through various channels, including websites, mobile applications, and emails;',
          'Secure, encrypted messaging with therapists in addition to online consultations;',
          'Participation in user forums, topics, replies, comments, feedback, blogs, and other submissions on the platform.'
        ],
        footer: 'Positivty reserves the right to modify, suspend, or discontinue its Services at any time, with or without notice, at its sole discretion. The scope of the "Services" referred to in this Privacy Policy includes all offerings provided by Positivty, including those listed above, and may be subject to change from time to time.'
      },
      {
        title: 'Consent',
        content: 'By using the platform, providing personal information, or making a payment to Positivty, you express your unambiguous consent to the collection, storage, processing, disclosure, and transfer of your personal information in accordance with the terms and conditions of this Privacy Policy and in compliance with the applicable data privacy laws in Singapore.',
        uppercaseText: 'YOU ACKNOWLEDGE THAT YOU VOLUNTARILY PROVIDE YOUR PERSONAL INFORMATION, EITHER DIRECTLY TO POSITIVTY OR THROUGH A THIRD PARTY OR YOUR ORGANIZATION. YOU HAVE THE OPTION TO DECLINE PROVIDING US WITH THE REQUESTED PERSONAL INFORMATION OR WITHDRAW YOUR CONSENT AT ANY TIME BY SENDING A WRITTEN REQUEST TO support@positivty.com.',
        uppercaseText2: 'PLEASE NOTE THAT IF YOU ARE ACCESSING OUR PLATFORM THROUGH A THIRD PARTY OR YOUR ORGANIZATION, YOU MUST NOTIFY THE THIRD PARTY OR ORGANIZATION ABOUT YOUR WITHDRAWAL OF CONSENT IN WRITING, AND THEY WILL INFORM US OF SUCH WITHDRAWAL. FAILURE TO PROVIDE US WITH YOUR PERSONAL INFORMATION OR WITHDRAW YOUR CONSENT MAY RESULT IN US NOT BEING ABLE TO FULFILL THE PURPOSES FOR WHICH THE INFORMATION WAS SOUGHT AND MAY LEAD TO RESTRICTIONS ON YOUR USE OF THE PLATFORM.',
        additionalNote: 'Additionally, please note that:',
        bullets: [
          'Your consent is effective from the moment you begin using the platform, providing your Personal Information, or making a payment to Positivty.',
          'Your consent may be withdrawn at any time by sending a written request to support@positivty.com.',
          'You are responsible for ensuring that any third party or organization accessing the platform on your behalf complies with the terms of this Privacy Policy and withdraws your consent in writing if necessary.'
        ]
      },
      {
        title: 'Why Do We Collect Personal Information?',
        content: 'The primary purpose of collecting this personal information is to provide a seamless, efficient, and personalized experience for our users. Additionally, the collection of personal information enables you to create an account and profile, allowing you to interact with the Therapists. Please note that you may update some of the provided information through your account page on our website or profile details in our mobile application(s). However, please be aware that certain changes may affect the functionality of our Services or impact your ability to access certain features.',
        reminder: 'As a reminder, by providing your personal information, you acknowledge that you are consenting to the collection, storage, processing, disclosure, and transfer of your personal information in accordance with the terms and conditions of this Privacy Policy and applicable data privacy laws in Singapore.',
        subTitle: 'We use your personal information to:',
        list: [
          'Identify and contact you for various purposes, such as resolving service and billing issues via phone or email',
          'Assist with scheduling appointments, send reminders for upcoming or follow-up appointments, and notify you of cancelled appointments',
          'Provide you with further information, products, and services that may be relevant to your interests and needs',
          'Gain a better understanding of our user\'s needs and preferences through statistical research (which will only be conducted anonymously and cannot be linked back to individual users)',
          'Detect and prevent errors, fraud, and other criminal activity to ensure the security and integrity of our Services',
          'Make disclosures as required by applicable laws and regulations',
          'Improve our website, mobile applications, and overall user experience to better serve your needs',
          'Respond to customer service requests more efficiently by leveraging your personal information',
          'Run contests, promotions, surveys, or other site features that may be of interest to you',
          'Process financial transactions in a timely and secure manner'
        ],
        additionalParagraphs: [
          'Your personal information is used by the Therapists to assess your condition accurately and provide you with personalized counselling services or digital experiences. However, there may be instances where we share minimal information with third-party tools to tailor the counselling sessions and in-app experience.',
          'At Positivty, we are committed to maintaining the privacy and integrity of your personal information. If you wish to opt out of receiving certain communications from us or restrict the use of your personal information, please notify us by writing to support@positivty.com.',
          'Please note that you can always access and update your personal information through your account page on our website or mobile application(s).'
        ]
      },
      {
        title: 'Updating Personal Information',
        content: 'If you need to update, correct, or change any of your personal information, please visit www.positivty.com/xyz. We will make every reasonable effort to incorporate the changes within a reasonable timeframe. Please note that if you provided your personal information to a third-party platform through which you access our Services, we may not be able to make changes to that information. In such cases, you will need to contact the third-party platform directly to update your personal information.',
        additionalParagraphs: [
          'You can also update your personal information through your profile on our website or mobile application(s).',
          'However, please be aware that some personal information, such as answers to online assessments, cannot be updated or deleted once submitted. If you would like us to remove your records from our system, please contact us at support@positivty.com and we will make every effort to accommodate your request unless we have a legal obligation to retain the information.',
          'Please note that we are required by professional standards and laws to retain certain information for record-keeping purposes, such as payment history, feedback, and client information. As a result, we will continue to store this information for a specified period of time as required by law, even if you delete your account. Additionally, there may be residual information that remains within our databases and other records, which will not be removed despite our efforts to delete the information.',
          'In summary, please visit www.positivty.com/xyz to update or change your personal information. We will do our best to accommodate your requests while adhering to applicable laws and professional standards.'
        ]
      },
      {
        title: 'Which Cookies Do We Collect?',
        content: 'To enhance your experience on our platform, we use cookies to collect information and provide you with a smoother experience. Cookies are small data files that we transfer to your device\'s hard disk for record-keeping purposes. We utilize cookies for two primary reasons:',
        list: [
          'Persistent Cookies: We use these cookies to save your user credentials for future logins to the Services, making it easier for you to access your account.',
          'Session ID Cookies: These cookies enable certain features of the Services, help us understand how you interact with the Services, and monitor aggregate usage by users and online traffic routing on the Services.'
        ],
        footer: 'Unlike persistent cookies, session ID cookies are deleted from your computer when you log off from the Services and close your browser.'
      },
      {
        title: 'Why Do We Collect Cookies?',
        content: 'We may partner with third-party services that place or read cookies on your browser to improve your user experience. By using these third-party services through our platform, you acknowledge their Privacy Policy and terms of use and agree not to hold Positivty liable for any issues arising from such use.',
        subTitle: 'You have the option to manage your cookie preferences by changing your browser settings to:',
        list: [
          'Stop accepting cookies.',
          'Prompt you before accepting a cookie from a website.'
        ],
        footer: 'Please note that if you do not accept cookies, you may not be able to use all features or functionalities of our platform.',
        additionalParagraphs: [
          'In summary, we use cookies to enhance your experience on our platform, and we provide you with options to manage your cookie preferences. By continuing to use our platform, you consent to our cookie policy and acknowledge that you have read and understood it.'
        ]
      },
      {
        title: 'What Log Data Do We Collect?',
        content: 'When you visit our platform, our servers or other parties on our behalf automatically collect certain information that your browser or mobile application sends ("Log Data"). This Log Data may include:',
        list: [
          'Your computer\'s Internet Protocol ("IP") address',
          'Browser type',
          'Device name',
          'Operating system version',
          'Configuration of the app when accessing the platform',
          'The webpage you were visiting before you came to our Services',
          'Pages of our platform and Services that you visit',
          'Time spent on those pages',
          'Information you search for on our Services',
          'Access times and dates',
          'Other statistics'
        ]
      },
      {
        title: 'Why Do We Collect Log Data?',
        content: 'We use this Log Data to:',
        list: [
          'Analyse trends to improve our Services and user experience',
          'Administer the platform and track user behaviour',
          'Gather broad demographic information for aggregate use to better understand our user base',
          'Tailor our Services to meet your individual needs and preferences'
        ],
        footer: 'This Log Data helps us understand how users interact with our platform, which allows us to make improvements to enhance your overall experience.'
      },
      {
        title: 'Confidentiality',
        content: 'At Positivty, we prioritize the confidentiality of all information shared during personal consultations with our therapists. We take all necessary measures to protect confidential information obtained through or stored in any medium. To ensure the highest quality of services, we require all our therapists to participate in regular supervision sessions where they discuss their cases.',
        subTitle: 'However, there may be situations where it is necessary to share confidential information with others to ensure the well-being of the client or others. These situations include:',
        list: [
          'Threats to the client\'s well-being or someone else\'s (harm to self or others)',
          'Criminal activity, including present or past abuse of minors, senior citizens, or disabled persons',
          'Legal Requirements'
        ],
        additionalParagraphs: [
          'In such cases, our therapists will share information with clinical supervisors, emergency contacts, law enforcement authorities, and other relevant parties deemed essential for maintaining safety.',
          'We also reserve the right to share clinically significant information with other mental health or medical professionals if you provide consent. During supervision sessions, other therapists may have access to information and notes as needed for clinical excellence and safety. We will make reasonable efforts to notify you before sharing any information with a third party outside of Positivty.',
          'Unless there are circumstances that require disclosure as outlined above, we will not share your personal information with anyone without your explicit consent. This includes oral, email, letter, or fax consent. By using Positivty, you agree to hold us harmless (indemnify) against any breach in confidentiality of your personal information. This means that you agree to take responsibility for any damages or losses resulting from a breach of confidentiality.',
          'If you access Positivty through a third-party platform, you also agree to indemnify us against any data breaches that occur due to any actions or omissions from the third-party platform. This includes any losses or damages resulting from unauthorized access to your personal information.',
          'By agreeing to these terms, you acknowledge that you understand the importance of maintaining confidentiality and agree to take responsibility for any breaches that may occur.'
        ]
      },
      {
        title: 'Third Party Disclosure',
        content: 'Positivty respects your privacy and does not sell or trade your personal information to third parties without first obtaining your consent. However, we may share your information with our trusted partners who assist us in operating our platform, conducting our business, or providing services to you. These partners may include:',
        list: [
          'Server/website hosting providers',
          'Other parties who help us operate, monitor or improve our platform'
        ],
        subTitle: 'In addition, we may release your information when we believe it is necessary to:',
        list2: [
          'Comply with the law',
          'Enforce our website policies, mobile application policies, or terms of use',
          'Protect our rights, property, or safety',
          'Protect the rights, property, or safety of others'
        ],
        footer: 'However, we may share aggregated and anonymous data (i.e., data that does not personally identify you) with third parties for marketing, advertising, or other purposes. By using Positivty, you acknowledge that you understand how we handle third-party disclosure and agree to our policies regarding the sharing of your personal information.'
      },
      {
        title: 'Security & Protection',
        content: 'Positivty takes the security and protection of your personal information very seriously. We have implemented a range of administrative, physical, and technical measures to safeguard your information from unauthorized access, use, or disclosure. Our systems and processes are designed to comply with industry standards for information privacy and security.',
        additionalParagraphs: [
          'Positivty offers the option to record calls or video sessions for Users and Therapists. This feature allows Users and Therapists to revisit the session at a later time, should they choose to do so. Both parties have the discretion to opt-out of recording the session, and in such cases, the Platform will not record the session.',
          'Therapists may maintain records of both online and offline sessions, as a professional courtesy. This is not required by Positivty, but it is a common practice in the industry. While we take the security of our systems seriously, we cannot be held responsible for the use or misuse of information shared by you or others. We strongly advise against sharing your personal information in publicly accessible areas on our platform.'
        ],
        subTitle: 'To ensure the confidentiality and security of your personal information, please keep in mind the following best practices:',
        list: [
          'Be cautious when sharing personal information with others',
          'Avoid sharing sensitive information in publicly accessible areas',
          'Use strong passwords and keep them confidential',
          'Regularly update your account settings and security preferences'
        ],
        additionalParagraphs2: [
          'By using our Platform, you acknowledge that you have read, understood, and agreed to these guidelines regarding the recording and storage of sessions.',
          'It is your responsibility to ensure the privacy and security of your email account and phone messages to prevent unauthorized access. We may use one or both of these channels to communicate with you regarding your mental/psychological wellness. However, please note that we will not be liable for any breach of confidentiality if your email or text messages are accessed by a third party, with or without your consent.',
          'Positivty will not be held liable for any issues related to data storage and/or security. By using our services, you acknowledge that you understand the security measures we have in place and agree to take responsibility for ensuring the privacy and security of your personal information. By accessing and using Positivty, you acknowledge that you have read, understood, and agree to these terms and conditions regarding security and confidentiality.'
        ]
      },
      {
        title: 'Third-Party Links',
        content: 'The Positivty platform may contain links to other third-party websites or mobile applications. Please note that these third-party sites are not under our control, and we are not responsible for their privacy practices. We encourage you to be aware when you leave our platform and to read the privacy policies of each and every third-party site or mobile application that collects personal information.',
        additionalParagraphs: [
          'By accessing any third-party site linked to our platform, you do so entirely at your own risk. We are not responsible for notifying you of any changes in name, location, or information on these sites. The linking party is solely responsible for maintaining the accuracy and integrity of their website or mobile application.',
          'Please be aware that when you voluntarily disclose personal information through a forum or on our platform, you do so at your own risk. Positivty is not responsible for the use of any personal information you share in this manner. By using our platform, you acknowledge that you understand the terms outlined above regarding third-party links and responsibility. You also acknowledge that you are aware of the risks associated with accessing third-party sites and sharing personal information.'
        ]
      },
      {
        title: 'Platform Usage by Under Age Users',
        content: 'Our Services, website, and mobile application(s) are not intended for individuals under the age of 18. We do not intentionally target or solicit anyone under the age of 18 to participate independently in our Services. We strictly prohibit any access to our Services by individuals under the age of 18. We do not allow anyone under 18 to create an account, register, or participate in any way with our Services without the consent of a parent or legal guardian. By using our platform, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are a parent or legal guardian of a minor who wishes to use our Services, please contact us to learn more about our policies and procedures for minors.',
        additionalParagraphs: [
          'Positivty will not be liable for any harm or damage resulting from unauthorized access to our Services by individuals under the age of 18. We reserve the right to take all necessary actions to prevent underage access to our Services, including terminating accounts and reporting suspicious activity. By accessing and using Positivty, you acknowledge that you understand and agree to these terms regarding age restriction and responsibility.'
        ]
      },
      {
        title: 'Modifications to Policy',
        content: 'Positivty reserves the right to modify or remove any part of this Privacy Policy without prior notice or liability to any third party. We may make changes to this policy at any time, without obligation to notify you. If we make significant changes to how we handle your personal information or update this policy, we may make reasonable efforts to inform you through a notification on our website or via email, allowing you to review the updated terms before continuing to use our platform.',
        additionalParagraphs: [
          'If you object to any changes to our terms, you can choose not to use our platform and deactivate your account by contacting Positivty directly. If you are signed up through a third-party platform or are accessing our Services through your employer, you will need to contact the third-party platform or your employer to deactivate your account. Unless explicitly stated otherwise, our current Privacy Policy applies to all personal information Positivty has about you and your account. By using our Services on our website, mobile application(s), or accessing our website or mobile application(s) after a notice of change has been sent to you or published on our website, you acknowledge that you have read, understood, and agree to the updated terms. This constitutes your consent to the changes.',
          'This Privacy Policy is effective as of the date indicated at the top of this page. We reserve the right to change this policy at any time, so please review it regularly for updates.'
        ]
      },
      {
        title: 'Force Majeure',
        content: 'Notwithstanding anything contained in this Privacy Policy or elsewhere, Positivty shall not be held responsible for any loss, damage or misuse of your sensitive personal data or information, if such loss, damage or misuse is attributable to a Force Majeure Event.',
        additionalParagraphs: [
          'A Force Majeure Event is defined as an unforeseen and uncontrollable event that is beyond the reasonable control of Positivty. A Force Majeure Event includes but is not limited to, the following events: sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorized access to computer data and storage devices, computer crashes, and breach of security and encryption',
          'In the event of a Force Majeure Event, Positivty shall not be responsible for any loss, damage, or misuse of your sensitive personal data or information. This means that we will not be liable for any losses or damages that may occur as a result of circumstances beyond our control. Positivty shall notify you as soon as reasonably practicable in the event of a Force Majeure Event. We will provide you with updates on the status of the event and any measures we are taking to mitigate its impact.',
          'By using our Services, you acknowledge that you have read, understood, and agreed to this Force Majeure clause.'
        ]
      },
      {
        title: 'Grievance Redressal',
        content: 'At Positivty, we value your feedback and concerns. To address any grievances or issues you may have with our Services, we have established a dedicated Grievance Redressal Forum. If you are not satisfied with any aspect of our Services, please feel free to contact us at support@positivty.com.',
        additionalParagraphs: [
          'We strive to respond to all complaints and concerns in a timely and efficient manner. We commit to providing a response to your grievance expeditiously. Our response to you would be within 3 working days from the date of receipt of your complaint, however it may take longer. Our goal is to resolve any issues promptly and fairly, ensuring that you receive a satisfactory outcome.'
        ],
        subTitle: 'To file a complaint or grievance, please submit your concern to support@positivty.com, including the following information:',
        list: [
          'A clear and concise description of the issue or problem you are experiencing',
          'Your name and contact details (email address and/or phone number)',
          'Any relevant screenshots or attachments (if applicable)'
        ],
        footer: 'Our dedicated team will review and investigate your complaint, working towards a prompt resolution. We will keep you updated on the status of your complaint and notify you when it is resolved.'
      },
      {
        title: 'Jurisdiction',
        content: 'The jurisdictional policies of Positivty have been carefully crafted to comply with the applicable laws and regulations in the Republic of Singapore. In particular, this Policy is governed by and construed in accordance with the laws of Singapore.',
        additionalParagraphs: [
          'In the event of any dispute or controversy arising between you (the user) and Positivty regarding the interpretation of this Policy or any matter related thereto, such dispute shall be resolved exclusively by the courts of Singapore. By using our Services, you hereby submit to the exclusive jurisdiction of the Singapore courts for any disputes or claims arising out of or related to this Policy, including but not limited to any claims related to Positivty\'s services, website, mobile application, or any transactions conducted through our platform.'
        ],
        subTitle: 'This jurisdiction clause applies to all disputes, claims, and actions arising from or related to this Policy, including but not limited to:',
        list: [
          'The formation, performance, or breach of this Policy',
          'Any claims for damages or losses arising from your use of our Services',
          'Any dispute related to the interpretation or implementation of this Policy'
        ],
        footer: 'In interpreting this Policy, Singapore law shall apply, without giving effect to any principles of conflicts of law that would lead to the application of the laws of another jurisdiction. By using our Services, you agree that any disputes arising from or related to this Policy shall be resolved exclusively through the courts of Singapore.'
      }
    ];
  }

  contactInfo = {
    address: '993 Bukit Timah Road, 06-06, Singapore 589631',
    email: 'contact@positivty.com'
  };
}