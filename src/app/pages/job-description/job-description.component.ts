import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { CareerService } from '../../core/services/api/career.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AlertService } from '../../core/services/alert/alert.service';
import { FormErrorService } from '../../shared/services/form-error.service';
import { FormErrorComponent } from '../../shared/components/form-error/form-error.component';
import { SeoService } from '../../core/services/seo/seo.service';

@Component({
    selector: 'app-job-description',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule, FormErrorComponent],
    templateUrl: './job-description.component.html',
    styleUrl: './job-description.component.scss'
})
export class JobDescriptionComponent implements OnInit, OnDestroy {
    jobId: number = 0;
    job: any = null;
    assessmentQuestions: any[] = [];
    loading: boolean = true;
    submitting: boolean = false;
    currentStep: number = 1; // 1: Personal Details, 2: Assessment, 3: Success
    activeVideoTab: 'record' | 'upload' = 'record';
    applicationDate: string = '';

    // Video Recording properties
    @ViewChild('videoPreview') videoPreview!: ElementRef<HTMLVideoElement>;
    @ViewChild('recordedVideo') recordedVideo!: ElementRef<HTMLVideoElement>;
    mediaStream: MediaStream | null = null;
    mediaRecorder: MediaRecorder | null = null;
    recordedChunks: Blob[] = [];
    isRecording: boolean = false;
    isCameraActive: boolean = false;
    recordedUrl: string | null = null;
    recordingDuration: number = 0;
    recordingInterval: any;

    personalForm!: FormGroup;
    assessmentForm!: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private careerService: CareerService,
        private fb: FormBuilder,
        private sanitizer: DomSanitizer,
        private alertService: AlertService,
        private formErrorService: FormErrorService,
        private seoService: SeoService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.jobId = +params['id'];
            if (this.jobId) {
                this.fetchJobDetails();
            }
        });

        this.initForms();
    }

    ngOnDestroy(): void {
        this.stopCamera();
    }

    initForms() {
        this.personalForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            addressLine1: ['', Validators.required],
            addressLine2: [''],
            pincode: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            phone: ['', Validators.required],
            alternativeNo: [''],
            email: ['', [Validators.required, Validators.email]],
            role: [{ value: '', disabled: true }],
            videoType: ['record'], // 'record' or 'upload'
            videoFile: [null],
            resume: [null, Validators.required],
            socialMediaUrl: [''],
            consent: [false, Validators.requiredTrue]
        });

        this.assessmentForm = this.fb.group({
            answers: this.fb.array([])
        });
    }

    get answers() {
        return this.assessmentForm.get('answers') as FormArray;
    }

    fetchJobDetails() {
        this.loading = true;
        this.careerService.getJobById(this.jobId).subscribe({
            next: (res: any) => {
                this.job = res?.jobDetails || res;
                this.assessmentQuestions = res?.assessmentQuestions || this.job?.assessmentQuestions || [];

                // Pre-fill Role field
                if (this.job?.jobName) {
                    this.personalForm.patchValue({ role: this.job.jobName });

                    // Update SEO metadata
                    this.seoService.updateSeoData({
                        title: this.job.jobName,
                        description: `Apply for the ${this.job.jobName} position at Positivty. ${this.job.location ? 'Located in ' + this.job.location : ''}`
                    });
                }

                this.setupAssessmentForm();
                this.loading = false;
            },
            error: (err: any) => {
                console.error('Error fetching job details:', err);
                this.loading = false;
            }
        });
    }

    setupAssessmentForm() {
        const answerControls = this.assessmentQuestions.map(q => {
            return this.fb.group({
                questionId: [q.questionId],
                answer: ['', Validators.required]
            });
        });
        this.assessmentForm.setControl('answers', this.fb.array(answerControls));
    }

    sanitizeHtml(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html || '');
    }

    scrollToForm() {
        const formElement = document.getElementById('apply-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    goToStep(step: number) {
        if (step === 2 && (this.assessmentQuestions.length === 0 || this.personalForm.invalid)) {
            if (this.personalForm.invalid) {
                this.personalForm.markAllAsTouched();
            }
            return;
        }
        this.currentStep = step;
        this.scrollToForm();
    }

    setVideoTab(tab: 'record' | 'upload') {
        this.activeVideoTab = tab;
        this.personalForm.patchValue({ videoType: tab });
        if (tab === 'upload') {
            this.stopCamera();
            this.recordedUrl = null;
        }
    }

    onFileChange(event: any, type: 'resume' | 'video' | 'assessment', questionIndex?: number) {
        const file = event.target.files[0];
        if (file) {
            if (type === 'resume') {
                this.personalForm.patchValue({ resume: file });
            } else if (type === 'video') {
                this.personalForm.patchValue({ videoFile: file });
                this.recordedUrl = URL.createObjectURL(file);
            } else if (type === 'assessment' && questionIndex !== undefined) {
                this.answers.at(questionIndex).get('answer')?.setValue(file);
            }
        }
    }

    // Video Recording Methods
    async startCamera() {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
                audio: true
            });
            if (this.videoPreview) {
                this.videoPreview.nativeElement.srcObject = this.mediaStream;
                this.isCameraActive = true;
                this.recordedUrl = null;
            }
        } catch (err) {
            console.error('Error accessing camera:', err);
            this.alertService.error('Camera Error', 'Could not access your camera. Please check permissions.');
        }
    }

    stopCamera() {
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }
        this.isCameraActive = false;
        if (this.recordingInterval) {
            clearInterval(this.recordingInterval);
        }
    }

    startRecording() {
        if (!this.mediaStream) return;

        this.recordedChunks = [];
        this.mediaRecorder = new MediaRecorder(this.mediaStream, {
            mimeType: 'video/webm;codecs=vp8,opus'
        });

        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                this.recordedChunks.push(event.data);
            }
        };

        this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
            this.recordedUrl = URL.createObjectURL(blob);

            // Create a File object for the form
            const file = new File([blob], `intro_video_${Date.now()}.webm`, { type: 'video/webm' });
            this.personalForm.patchValue({ videoFile: file });

            this.stopCamera();
        };

        this.mediaRecorder.start();
        this.isRecording = true;
        this.recordingDuration = 0;
        this.recordingInterval = setInterval(() => {
            this.recordingDuration++;
        }, 1000);
    }

    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            clearInterval(this.recordingInterval);
        }
    }

    retakeVideo() {
        this.recordedUrl = null;
        this.personalForm.patchValue({ videoFile: null });
        this.startCamera();
    }

    formatDuration(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    submitApplication() {
        if (this.personalForm.invalid) {
            this.personalForm.markAllAsTouched();
            this.scrollToForm();
            return;
        }

        if (this.assessmentQuestions.length > 0 && this.assessmentForm.invalid) {
            this.assessmentForm.markAllAsTouched();
            return;
        }

        this.submitting = true;
        const formData = new FormData();

        // Basic Info with specific casing from curl
        formData.append('firstName', this.personalForm.get('firstName')?.value);
        formData.append('lastName', this.personalForm.get('lastName')?.value);
        formData.append('addressline1', this.personalForm.get('addressLine1')?.value);
        formData.append('addressline2', this.personalForm.get('addressLine2')?.value || '');
        formData.append('pincode', this.personalForm.get('pincode')?.value);
        formData.append('city', this.personalForm.get('city')?.value);
        formData.append('state', this.personalForm.get('state')?.value);
        formData.append('country', this.personalForm.get('country')?.value);
        formData.append('Phone', this.personalForm.get('phone')?.value);
        formData.append('alternativePhone', this.personalForm.get('alternativeNo')?.value || '');
        formData.append('Email', this.personalForm.get('email')?.value);
        formData.append('RoleType', this.job?.jobName || '');
        formData.append('socialUrl', this.personalForm.get('socialMediaUrl')?.value || '');
        formData.append('AreaOfInterest', ' '); // Default as seen in curl

        // Files
        if (this.personalForm.get('videoFile')?.value) {
            formData.append('VideoFile', this.personalForm.get('videoFile')?.value);
        }
        formData.append('ResumeFile', this.personalForm.get('resume')?.value);

        // Assessment
        const answers = this.assessmentForm.value.answers;
        const assessmentAnswersPayload: any[] = [];

        answers.forEach((ans: any, index: number) => {
            const question = this.assessmentQuestions.find(q => q.questionId === ans.questionId);
            const answerObj = {
                questionId: ans.questionId,
                question: question?.question || question?.questionName || '',
                questionType: question?.questionType || 'text',
                answer: ans.answer instanceof File ? ans.answer.name : ans.answer
            };
            assessmentAnswersPayload.push(answerObj);

            // If it's a file, append it with specific key
            if (ans.answer instanceof File) {
                formData.append(`assessmentFile_${ans.questionId}`, ans.answer);
            }
        });

        formData.append('assessmentAnswers', JSON.stringify(assessmentAnswersPayload));

        // Blank assessmentAnswers field as seen at the end of curl? 
        // Some APIs use repeated keys or have specific requirements. 
        // The curl showed it twice, but the first one had data.
        // formData.append('assessmentAnswers', '[]'); 

        this.careerService.applyJob(formData).subscribe({
            next: (res) => {
                this.applicationDate = new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                });
                this.currentStep = 3;
                this.scrollToForm();
                this.submitting = false;
            },
            error: (err: any) => {
                console.error('Error submitting application:', err);
                this.alertService.error('Error', 'Error submitting application. Please try again.');
                this.submitting = false;
            }
        });
    }
}
