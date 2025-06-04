import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {workData} from '../../data/data'

@Component({
  selector: 'app-how-its-work',
  imports: [
    CommonModule
  ],
  templateUrl: './how-its-work.component.html',
  styleUrl: './how-its-work.component.css'
})
export class HowItsWorkComponent {
  workData = workData
}
