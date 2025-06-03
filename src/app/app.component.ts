import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAudioComponent } from './components/background-audio/background-audio.component';

@Component({
  selector: 'app-root',
  imports: [BackgroundAudioComponent, RouterOutlet],
  template: `<app-background-audio/> <router-outlet/>`,
})
export class AppComponent { }
