import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [
    CommonModule
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  @Input() data:any
  
  activeTab:any = 1
}
