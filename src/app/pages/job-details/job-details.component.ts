import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobCardComponent } from "../../shared/components/job-card/job-card.component";

@Component({
  selector: 'app-job-details',
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  truncateTitle(title: string, limit = 12): string {
    const words = title.split(' ');
    return words.length > limit
      ? words.slice(0, limit).join(' ') + '...'
      : title;
  }

  heroBtnList = [
    {
      title: 'Career Growth, Fuelled by You',
      desc: 'Grow with mentorship, skill-building workshops, and a clear promotion path. Access learning opportunities - your growth, your way. Lead projects, manage teams, or shape global mental health initiatives.'
    },
    {
      title: 'Work-Life Balance that Works for You',
      desc: 'Enjoy flexible hybrid/remote work and “No-Meeting Fridays.” Recharge with different types of PTO, free therapy sessions, and mental health days. Your well-being fuels our mission.'
    },
    {
      title: 'Rewards that Reflect your Value',
      desc: 'Earn competitive salaries, performance bonuses, and annual raises. Benefit from premium healthcare to accolades. Your hard work is recognized and rewarded'
    },
    {
      title: 'A Culture that Feels like Family',
      desc: 'Collaborate in a supportive, zero-ego environment with team retreats and monthly awards. Pitch ideas, launch campaigns, and grow in a judgment-free zone where respect and innovation thrive.'
    },
  ]

  activeIndex: number | null = null;

  roleTypeOpen = false;
  locationOpen = false;

  selectedRole = 'Role Type';
  selectedLocation = 'Location';

  roleTypes = [
    'All',
    'Therapist',
    'Software Developer',
    'Permanent',
    'Sales',
    'SEO'
  ];

  locations = [
    'All',
    'Remote',
    'India',
    'Work From Home',
    'Noida'
  ];

  toggleRole() {
    this.roleTypeOpen = !this.roleTypeOpen;
    this.locationOpen = false;
  }

  toggleLocation() {
    this.locationOpen = !this.locationOpen;
    this.roleTypeOpen = false;
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.roleTypeOpen = false;
  }

  selectLocation(location: string) {
    this.selectedLocation = location;
    this.locationOpen = false;
  }


  jobs = [
    {
      title: 'In-House Therapist/ Operations Executive',
      location: 'Remote',
      description:
        'The In House Therapist / Operations Executive is a dual role position responsible for delivering in '
    },
    {
      title: 'Senior Full Stack Developer',
      location: 'Location: Remote ',
      description:
        'Senior Angular + .NET Developer (4-5 Years Experience)',
      location2: 'Location: Hybrid/On-site',
      subdetail: 'Reporting To: CEO & CTO',
      exp: 'Expe'
    },
    {
      title: 'Full Stack Developer',
      location: 'Location: Remote',
      description:
        'Angular + .NET Developer (1.5-2.5 Years Experience)',
      location2: 'Location: Hybrid/On-site',
      subdetail: 'Reporting To: CEO & CTO',
      exp: 'Experience:&'
    },
    {
      title: 'Marketing Executive',
      location: 'Location: India',
      description: 'Job: Marketing Executive'
    },
    {
      title: 'Business Development Executive',
      location: 'Location: Work From Home',
      description: 'POSITIVTY is a user friendly mental wellness platform designed to he'
    },
    {
      title: 'SEO Executive',
      location: 'Location: Noida',
      description: 'Positivty is a fast-growing mental health and wellness platform dedicated to making professional support accessible and&nb'
    },

  ];

  roles = [
    { title: 'Mental Health Ambassador Roles' },
    { title: 'Volunteer Roles' },
    { title: 'Internship Roles' }
  ];

}
