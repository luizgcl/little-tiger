import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Winner {
  id: number;
  name: string;
  amount: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  playersOnline = 1247;
  totalBetsToday = 8934;
  biggestWin = 15750;
  jackpot = 125000;
  
  recentWinners: Winner[] = [
    { id: 1, name: 'João***', amount: 250 },
    { id: 2, name: 'Maria***', amount: 180 },
    { id: 3, name: 'Pedro***', amount: 420 },
    { id: 4, name: 'Ana***', amount: 95 },
    { id: 5, name: 'Carlos***', amount: 310 },
  ];

  private intervals: any[] = [];

  ngOnInit() {
    // Simulate real-time updates
    this.startRealTimeUpdates();
  }

  ngOnDestroy() {
    // Clean up intervals
    this.intervals.forEach(interval => clearInterval(interval));
  }

  private startRealTimeUpdates() {
    // Update players online every 5 seconds
    const playersInterval = setInterval(() => {
      this.playersOnline += Math.floor(Math.random() * 10) - 5;
      this.playersOnline = Math.max(1000, Math.min(2000, this.playersOnline));
    }, 5000);

    // Update total bets every 3 seconds
    const betsInterval = setInterval(() => {
      this.totalBetsToday += Math.floor(Math.random() * 5) + 1;
    }, 3000);

    // Update jackpot every 10 seconds
    const jackpotInterval = setInterval(() => {
      this.jackpot += Math.floor(Math.random() * 100) + 50;
    }, 10000);

    // Add new winner every 15 seconds
    const winnersInterval = setInterval(() => {
      this.addNewWinner();
    }, 15000);

    this.intervals.push(playersInterval, betsInterval, jackpotInterval, winnersInterval);
  }

  private addNewWinner() {
    const names = ['João***', 'Maria***', 'Pedro***', 'Ana***', 'Carlos***', 'Luiz***', 'Fernanda***', 'Ricardo***'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = Math.floor(Math.random() * 500) + 50;
    
    const newWinner: Winner = {
      id: Date.now(),
      name: randomName,
      amount: randomAmount
    };

    this.recentWinners.unshift(newWinner);
    
    // Keep only the last 5 winners
    if (this.recentWinners.length > 5) {
      this.recentWinners.pop();
    }

    // Update biggest win if necessary
    if (randomAmount > this.biggestWin) {
      this.biggestWin = randomAmount;
    }
  }
}