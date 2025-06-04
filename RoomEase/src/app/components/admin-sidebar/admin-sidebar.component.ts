import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
@Input() show:any

current: string = '';

constructor(private router: Router) {}

ngOnInit(): void {
  this.current = this.router.url;
}
}
