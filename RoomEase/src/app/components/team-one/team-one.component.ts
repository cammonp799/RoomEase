import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { teamData } from '../../data/data';
import { RouterLink } from '@angular/router';

interface TeamData{
  image: string;
  name: string;
  property: string;
  call: string;
  review: string;
}

@Component({
  selector: 'app-team-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './team-one.component.html',
  styleUrl: './team-one.component.css'
})
export class TeamOneComponent {
  teamData:TeamData[] = teamData
}
