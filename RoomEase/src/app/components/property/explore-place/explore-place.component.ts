import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-place',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './explore-place.component.html',
  styleUrl: './explore-place.component.css'
})
export class ExplorePlaceComponent {
  @Input() item:any

}
