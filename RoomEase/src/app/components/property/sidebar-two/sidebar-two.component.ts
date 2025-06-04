import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Select2Module } from 'ng-select2-component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-sidebar-two',
  imports: [
    CommonModule,
    Select2Module,
    NgxSliderModule
  ],
  templateUrl: './sidebar-two.component.html',
  styleUrl: './sidebar-two.component.css'
})
export class SidebarTwoComponent {
  @Input() show:any

  type:any = [
      {value: '1', label: 'Apartment',},
      {value: '2', label: 'Condo',},
      {value: '3', label: 'Family',},
      {value: '4', label: 'Houses',},
      {value: '5', label: 'Villa',},
  ];
  status:any = [
      {value: '1', label: 'For Rent',},
      {value: '2', label: 'For Buy',},
      {value: '3', label: 'For Sale',},
  ];

  minprice:any = [
    {value: '1', label: 'Less Then $1000',},
    {value: '2', label: '$1000 - $2000',},
    {value: '3', label: '$2000 - $3000',},
    {value: '4', label: '$3000 - $4000',},
    {value: '5', label: 'Above $5000',},
  ];
  bedrooms:any = [
      {value: '1', label: '1',},
      {value: '2', label: '2',},
      {value: '3', label: '3',},
      {value: '4', label: '4',},
      {value: '5', label: '5',},
  ];
  garage:any = [
      {value: '1', label: 'Any Type',},
      {value: '2', label: 'Yes',},
      {value: '3', label: 'No',},
  ];
  built:any = [
      {value: '1', label: '2010',},
      {value: '2', label: '2011',},
      {value: '3', label: '2012',},
      {value: '4', label: '2013',},
      {value: '5', label: '2014',},
      {value: '6', label: '2015',},
      {value: '7', label: '2016',},
  ];

  value: number = 40;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };
}
