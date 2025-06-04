import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-four',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-four.component.html',
  styleUrl: './list-four.component.css'
})
export class ListFourComponent {
  @Input() item:any
  @Input() border:any
}
