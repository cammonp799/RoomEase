import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-top',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.css'
})
export class NavbarTopComponent {

}
