export interface StoryFormData {
  salutation: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  anonymous: string;
  storyTitle: string;
  story: string;
  uploadFileName: string;
  thumbnailName: string;
  submittedAt: string;
}

export interface NextStep {
  title: string;
  desc: string;
}