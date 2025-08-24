import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="media-player">
      <!-- Audio Player -->
      <div class="audio-section" *ngIf="audioUrl">
        <h5>Audio Content</h5>
        <div class="audio-player">
          <audio #audioPlayer controls [src]="audioUrl" (loadstart)="onAudioLoad()">
            Your browser does not support the audio element.
          </audio>
          <div class="audio-controls">
            <button class="control-btn" (click)="toggleAudio()" [disabled]="!audioLoaded">
              {{audioPlaying ? '⏸️' : '▶️'}}
            </button>
            <div class="audio-info">
              <div class="audio-title">Audio Discussion</div>
              <div class="audio-duration" *ngIf="audioDuration">
                {{formatTime(currentAudioTime)}} / {{formatTime(audioDuration)}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Player -->
      <div class="video-section" *ngIf="videoUrl">
        <h5>Video Content</h5>
        <div class="video-player">
          <video #videoPlayer controls [src]="videoUrl" (loadstart)="onVideoLoad()">
            Your browser does not support the video element.
          </video>
          <div class="video-controls">
            <button class="control-btn" (click)="toggleVideo()" [disabled]="!videoLoaded">
              {{videoPlaying ? '⏸️' : '▶️'}}
            </button>
            <div class="video-info">
              <div class="video-title">Video Analysis</div>
              <div class="video-duration" *ngIf="videoDuration">
                {{formatTime(currentVideoTime)}} / {{formatTime(videoDuration)}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Placeholder for when no media is available -->
      <div class="no-media" *ngIf="!audioUrl && !videoUrl">
        <div class="media-placeholder">
          <div class="placeholder-icon">🎭</div>
          <div class="placeholder-text">
            <h5>Media Content</h5>
            <p>Audio and video content will be available here when provided.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .media-player {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 16px;
      padding: 30px;
      margin: 20px 0;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }

    h5 {
      font-family: 'Georgia', serif;
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
      position: relative;
    }

    h5::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #DAA520, #FFD700);
    }

    .audio-section,
    .video-section {
      margin-bottom: 30px;
    }

    .audio-player,
    .video-player {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    audio,
    video {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 15px;
      background: #000;
    }

    video {
      max-height: 400px;
      object-fit: contain;
    }

    .audio-controls,
    .video-controls {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .control-btn {
      background: linear-gradient(45deg, #4A90E2, #357ABD);
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .control-btn:hover:not(:disabled) {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    .control-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }

    .audio-info,
    .video-info {
      flex: 1;
    }

    .audio-title,
    .video-title {
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }

    .audio-duration,
    .video-duration {
      color: #666;
      font-size: 0.9rem;
      font-family: 'Courier New', monospace;
    }

    .no-media {
      text-align: center;
      padding: 40px 20px;
    }

    .media-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .placeholder-icon {
      font-size: 4rem;
      opacity: 0.3;
      animation: pulse 2s ease-in-out infinite;
    }

    .placeholder-text h5 {
      margin-bottom: 10px;
    }

    .placeholder-text p {
      color: #666;
      margin: 0;
      max-width: 300px;
      line-height: 1.5;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .media-player {
        padding: 20px;
      }

      .audio-controls,
      .video-controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .control-btn {
        align-self: center;
      }

      .audio-info,
      .video-info {
        text-align: center;
        width: 100%;
      }
    }

    /* Dark Theme */
    [data-theme="dark"] .media-player {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      color: #ecf0f1;
    }

    [data-theme="dark"] h5 {
      color: #ecf0f1;
    }

    [data-theme="dark"] .audio-player,
    [data-theme="dark"] .video-player {
      background: #34495e;
    }

    [data-theme="dark"] .audio-title,
    [data-theme="dark"] .video-title {
      color: #ecf0f1;
    }

    [data-theme="dark"] .audio-duration,
    [data-theme="dark"] .video-duration {
      color: #bdc3c7;
    }

    [data-theme="dark"] .placeholder-text p {
      color: #bdc3c7;
    }

    /* Enhanced Styling */
    .audio-player::before,
    .video-player::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #4A90E2, #357ABD, #4A90E2);
      border-radius: 12px 12px 0 0;
    }

    .audio-player,
    .video-player {
      position: relative;
      overflow: hidden;
    }

    .control-btn {
      position: relative;
      overflow: hidden;
    }

    .control-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s ease;
    }

    .control-btn:hover::before {
      left: 100%;
    }
  `]
})
export class MediaPlayerComponent {
  @Input() audioUrl?: string;
  @Input() videoUrl?: string;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  audioLoaded = false;
  videoLoaded = false;
  audioPlaying = false;
  videoPlaying = false;
  audioDuration = 0;
  videoDuration = 0;
  currentAudioTime = 0;
  currentVideoTime = 0;

  onAudioLoad(): void {
    if (this.audioPlayer) {
      const audio = this.audioPlayer.nativeElement;
      audio.addEventListener('loadedmetadata', () => {
        this.audioLoaded = true;
        this.audioDuration = audio.duration;
      });
      
      audio.addEventListener('timeupdate', () => {
        this.currentAudioTime = audio.currentTime;
      });

      audio.addEventListener('play', () => {
        this.audioPlaying = true;
      });

      audio.addEventListener('pause', () => {
        this.audioPlaying = false;
      });

      audio.addEventListener('ended', () => {
        this.audioPlaying = false;
      });
    }
  }

  onVideoLoad(): void {
    if (this.videoPlayer) {
      const video = this.videoPlayer.nativeElement;
      video.addEventListener('loadedmetadata', () => {
        this.videoLoaded = true;
        this.videoDuration = video.duration;
      });
      
      video.addEventListener('timeupdate', () => {
        this.currentVideoTime = video.currentTime;
      });

      video.addEventListener('play', () => {
        this.videoPlaying = true;
      });

      video.addEventListener('pause', () => {
        this.videoPlaying = false;
      });

      video.addEventListener('ended', () => {
        this.videoPlaying = false;
      });
    }
  }

  toggleAudio(): void {
    if (this.audioPlayer) {
      const audio = this.audioPlayer.nativeElement;
      if (this.audioPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  }

  toggleVideo(): void {
    if (this.videoPlayer) {
      const video = this.videoPlayer.nativeElement;
      if (this.videoPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  }

  formatTime(timeInSeconds: number): string {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) {
      return '0:00';
    }
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}