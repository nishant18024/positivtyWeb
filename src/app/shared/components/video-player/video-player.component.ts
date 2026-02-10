import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input() videoId!: string;
  @Input() width: string = '75%';
  @Input() maxWidth: string = 'max-w-4xl';

  showThumbnail = true;
  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  get thumbnailUrl(): string {
    return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`;
  }

  playVideo(): void {
    this.showThumbnail = false;
    const url = `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}