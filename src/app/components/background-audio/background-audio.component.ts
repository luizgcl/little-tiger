import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-background-audio',
  imports: [LucideAngularModule],
  templateUrl: './background-audio.component.html',
  styleUrl: './background-audio.component.css'
})
export class BackgroundAudioComponent implements AfterViewInit, OnDestroy {

  audio = new Audio('audios/casino-ambiance-19130.mp3');

  ngAfterViewInit(): void {
    this.audio.volume = 0.1;
    this.audio.load();
    this.audio.play();
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted;
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
