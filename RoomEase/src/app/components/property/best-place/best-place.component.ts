import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { explorePlace } from '../../../data/data';
import { RouterLink } from '@angular/router';

interface BestPlace{
  image: string;
  loction: string;
  property: string;
}

@Component({
  selector: 'app-best-place',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-place.component.html',
  styleUrl: './best-place.component.css'
})
export class BestPlaceComponent {
  bestPlace:BestPlace[] = explorePlace
}
