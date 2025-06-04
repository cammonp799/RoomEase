import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { bestLoction } from '../../data/data';

interface Loction{
    image: string;
    location: string;
    properties: string;
}

@Component({
  selector: 'app-best-loctions',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-loctions.component.html',
  styleUrl: './best-loctions.component.css'
})
export class BestLoctionsComponent {
  loctionData:Loction[] = bestLoction
}
