import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from "../../shared/components/job-card/job-card.component";
import { CareerService } from '../../core/services/api/career.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit {
  jobs: any[] = [];
  loading: boolean = false;

  constructor(
    private careerService: CareerService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadAllJobs();
  }

  loadAllJobs() {
    this.loading = true;
    // Fetching Full-Time by default as the page title implies Full-Time Roles
    this.careerService.getJobDetails('Full-Time').subscribe({
      next: (res: any) => {
        this.jobs = Array.isArray(res) ? res : (res?.data || []);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching jobs:', err);
        this.loading = false;
      }
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html || '');
  }

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


  roles = [
    { title: 'Mental Health Ambassador Roles' },
    { title: 'Volunteer Roles' },
    { title: 'Internship Roles' }
  ];
}
