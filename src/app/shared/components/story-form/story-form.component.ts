import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StorySuccessComponent } from '../story-success/story-success.component';
import { StoryFormData } from '../models/story.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [FormsModule, StorySuccessComponent, CommonModule],
  templateUrl: './story-form.component.html',
})
export class StoryFormComponent {
  submitted = false;
  uploadFileName = '';
  thumbnailName = '';
  readonly menuItems = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Table', 'Help'];

  formData: StoryFormData = {
    salutation: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    anonymous: '',
    storyTitle: '',
    story: '',
    uploadFileName: '',
    thumbnailName: '',
    submittedAt: '',
  };

  onFileChange(event: Event, type: 'upload' | 'thumbnail'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    if (type === 'upload') {
      this.uploadFileName = file.name;
      this.formData.uploadFileName = file.name;
    } else {
      this.thumbnailName = file.name;
      this.formData.thumbnailName = file.name;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((ctrl) => ctrl.markAsTouched());
      return;
    }
    const now = new Date();
    this.formData.submittedAt = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    this.submitted = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get fullName(): string {
    return [this.formData.salutation, this.formData.firstName, this.formData.lastName]
      .filter(Boolean)
      .join(' ');
  }
}