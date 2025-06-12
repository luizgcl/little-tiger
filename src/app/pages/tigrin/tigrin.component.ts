import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { optionsMap } from '../../entity/Option';
import { OptionPipe } from "../../pipes/option.pipe";

@Component({
  selector: 'app-tigrin',
  imports: [CurrencyPipe, PercentPipe, FormsModule, OptionPipe],
  templateUrl: './tigrin.component.html',
  styleUrl: './tigrin.component.css',
  animations: [
    trigger('sorteioAnim', [
      state('initial', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('active', style({ opacity: 1, transform: 'translateY(0)' })),
      state('final', style({ opacity: 1, transform: 'scale(1.2)' })),
      transition('initial => active', [
        animate('0.2s ease-out')
      ]),
      transition('active => initial', [
        animate('0.2s ease-in')
      ]),
      transition('active => final', [
        animate('0.5s ease-in-out')
      ]),
      transition('* => rolling', [
        animate('0.1s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translateY(20px)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class TigrinComponent {

  options = Object.keys(optionsMap);
  ods = 3;

  credits = 100;
  cost = 2;

  currents: string[] = [];
  animationState: string = 'initial';

  isSorting = false;
  total = signal(0);

  audio = new Audio();

  constructor() {
    this.audio.src = 'audios/mixkit-bubble-pop-up-alert-notification-2357.wav';
    this.audio.load();
  }

  async startSorting(): Promise<void> {
    if (this.audio.src !== 'audios/mixkit-bubble-pop-up-alert-notification-2357.wav')
    {
      this.audio.src = 'audios/mixkit-bubble-pop-up-alert-notification-2357.wav';
      this.audio.load();
    }

    if (this.isSorting) {
      return;
    }

    if (this.credits < this.cost) return;

    this.audio.play().catch((err) => console.error(err));

    this.credits -= this.cost;

    this.isSorting = true;

    this.currents = await Promise.all([
      this.sorting(0),
      this.sorting(1),
      this.sorting(2)
    ])

    this.check();
    this.isSorting = false;
  }

  private async sorting(pos: number) {
    const totalIterations = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    const finalIndex = Math.floor(Math.random() * this.options.length);
    const delayBetweenLetters = 100;

    for (let i = 0; i < totalIterations; i++) {
      const randomIndex = Math.floor(Math.random() * this.options.length);
      this.currents[pos] = this.options[randomIndex];
      this.animationState = 'rolling';
      await this.delay(delayBetweenLetters);
      this.animationState = 'initial';
    }

    this.currents[pos] = this.options[finalIndex];
    this.animationState = 'final';
    return this.currents[pos];
  }

  private check() {
    const multi = this.currents.reduce((acc, i) => {
      return acc + (optionsMap[i].multi)
    }, 1);

    this.total.set(multi);

    if ((this.cost * multi) > 0) {
      this.credits += this.cost + (this.cost * multi);
      this.audio.src = 'audios/mixkit-positive-notification-951.wav';
    } else {
      this.audio.src = 'audios/mixkit-software-interface-remove-2576.wav';
    }

    if (this.currents.every((val) => val === this.currents[0]) && optionsMap[this.currents[0]].endGame) {
      this.credits = 0;
    }
    this.audio.load();
    this.audio.play().catch((err) => console.error(err));
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
