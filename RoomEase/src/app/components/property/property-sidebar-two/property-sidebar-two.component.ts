import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-sidebar-two',
  imports: [
    CommonModule
  ],
  templateUrl: './property-sidebar-two.component.html',
  styleUrl: './property-sidebar-two.component.css'
})
export class PropertySidebarTwoComponent {
  count:number = 0
  count2:number = 0
}
