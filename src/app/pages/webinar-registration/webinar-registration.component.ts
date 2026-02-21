import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../../shared/components/webinar-card/webinar-card.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-webinar-registration',
    standalone: true,
    imports: [CommonModule, WebinarCardComponent, FormsModule],
    templateUrl: './webinar-registration.component.html',
    styleUrl: './webinar-registration.component.scss'
})
export class WebinarRegistrationComponent implements OnInit {
    upcomingWebinars = [
        {
            id: 1,
            image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
            date: 'Apr 10, 2025, 6:00 PM',
            title: 'Healing Minds: Building Emotional Resilience',
            description: 'A live interactive session focused on mental wellness and emotional growth and finding inner peace in a chaotic world.',
            upcoming: true,
            btnText: 'Join Now',
            platform: 'Zoom',
            panelistName: 'Dr. Sarah Smith',
            panelistImage: 'https://i.pravatar.cc/150?u=sarah',
            agenda: [
                'Introduction to Emotional Resilience',
                'Understanding Stress Triggers',
                'Practical Mindfulness Exercises',
                'Q&A Session'
            ],
            selected: true
        },
        {
            id: 2,
            image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
            date: 'May 15, 2025, 7:00 PM',
            title: 'Stress Management 101: Practical Tools',
            description: 'Learn how to manage daily stress with expert-led techniques and mindfulness practices during this interactive workshop.',
            upcoming: true,
            btnText: 'Join Now',
            platform: 'Zoom',
            panelistName: 'Dr. John Doe',
            panelistImage: 'https://i.pravatar.cc/150?u=john',
            agenda: [
                'Identifying Sources of Stress',
                'Breathwork Techniques',
                'Building a Support System',
                'Live Demonstration'
            ],
            selected: true
        },
        {
            id: 3,
            image: 'https://positivtystaticassets.blob.core.windows.net/images/community/communityhome/webinars-img.jpg',
            date: 'Jun 20, 2025, 5:30 PM',
            title: 'Understanding Relationships and Boundaries',
            description: 'Explore the dynamics of healthy relationships and how to set effective boundaries for a better life.',
            upcoming: true,
            btnText: 'Join Now',
            platform: 'Zoom',
            panelistName: 'Dr. Emily Brown',
            panelistImage: 'https://i.pravatar.cc/150?u=emily',
            agenda: [
                'The Importance of Boundaries',
                'Communication Strategies',
                'Conflict Resolution',
                'Interactive Discussion'
            ],
            selected: true
        }
    ];

    selectedWebinar: any;
    registrationData = {
        name: '',
        email: '',
        phone: ''
    };

    get selectedCount(): number {
        return this.upcomingWebinars.filter(w => w.selected).length;
    }

    ngOnInit() {
        this.selectedWebinar = this.upcomingWebinars[0];
    }

    selectWebinar(webinar: any) {
        this.selectedWebinar = webinar;
        window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    toggleWebinarSelection(webinar: any) {
        webinar.selected = !webinar.selected;
    }

    registerForAll() {
        this.upcomingWebinars.forEach(w => w.selected = true);
    }

    onSubmit() {
        const selectedTitles = this.upcomingWebinars.filter(w => w.selected).map(w => w.title);
        console.log('Registration submitted:', this.registrationData, 'for:', selectedTitles);
        alert(`Thank you for registering! You are signed up for ${selectedTitles.length} webinar(s). Check your email for confirmations.`);
    }
}
