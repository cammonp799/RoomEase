import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-one',
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar-one.component.html',
  styleUrl: './sidebar-one.component.css'
})
export class SidebarOneComponent {
  @Input() show:any
}
