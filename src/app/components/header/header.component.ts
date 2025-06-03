import { Component } from '@angular/core';
import { BackgroundAudioComponent } from '../background-audio/background-audio.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BackgroundAudioComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}