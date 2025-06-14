import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, viewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-background-audio',
  imports: [LucideAngularModule],
  templateUrl: './background-audio.component.html',
  styleUrl: './background-audio.component.css'
})
export class BackgroundAudioComponent implements OnInit, OnDestroy {

  audio = new Audio('audios/casino-ambiance-19130.mp3');

  played = false;

  constructor() {
    this.audio.defaultMuted = true;
    this.audio.muted = true;
  }

  ngOnInit(): void {
    this.audio.volume = 0.1;
    this.audio.load();
    this.audio.muted = true;
  }

  playAudio() {
    this.audio.play();
  }

  toggleMute() {
    if (!this.played) {
      this.playAudio();
    }
    this.audio.muted = !this.audio.muted;
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
