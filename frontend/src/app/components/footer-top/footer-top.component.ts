import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-top',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-top.component.html',
  styleUrl: './footer-top.component.css'
})
export class FooterTopComponent {
  @Input() bg:any
}
