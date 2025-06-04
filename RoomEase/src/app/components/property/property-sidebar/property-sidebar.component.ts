import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './property-sidebar.component.html',
  styleUrl: './property-sidebar.component.css'
})
export class PropertySidebarComponent {
  @Input() agent:any
  featureProperty = [
    {
      image:'assets/img/p-1.jpg',
      name:'Loss vengel New Apartment',
      loction:'Sans Fransico',
      type:'For Sale',
      value:'$4,240'
    },
    {
      image:'assets/img/p-2.jpg',
      name:'Montreal Quriqe Apartment',
      loction:'Liverpool, London',
      type:'For Rent',
      value:'$7,380'
    },
    {
      image:'assets/img/p-3.jpg',
      name:'Curmic Studio For Office',
      loction:'Montreal, Canada',
      type:'For Buy',
      value:'$8,730'
    },
    {
      image:'assets/img/p-4.jpg',
      name:'Sreek View, New York',
      loction:'Sans Fransico',
      type:'For Rent',
      value:'$6,240'
    },
  ]
}
