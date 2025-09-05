import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { achievementData } from '../../data/data';

import { CountUpModule } from 'ngx-countup';

interface Achivement{
    title: string;
    value: number;
    symbol: string;
}

@Component({
  selector: 'app-achievement',
  imports: [
    CommonModule,
    CountUpModule
  ],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
  achivementData:Achivement[] = achievementData
}
