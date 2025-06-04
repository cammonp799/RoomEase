import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Select2Module } from 'ng-select2-component';

@Component({
  selector: 'app-property-detail',
  imports: [
    CommonModule,
    RouterLink,
    Select2Module
  ],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {
  feature = [
    {
      title:'Bedrooms:',
      subTitle:'3 Beds'
    },
    {
      title:'Bathrooms:',
      subTitle:'2 Bath'
    },
    {
      title:'Areas:',
      subTitle:'4,240 sq ft'
    },
    {
      title:'Garage:',
      subTitle:'1'
    },
    {
      title:'Property Type:',
      subTitle:'Apartment'
    },
    {
      title:'Year:',
      subTitle:'Built1982'
    },
    {
      title:'Status:',
      subTitle:'Active'
    },
    {
      title:'Cooling:',
      subTitle:'Central A/C'
    },
    {
      title:'Heating Type:',
      subTitle:'Forced Air'
    },
    {
      title:'Kitchen Features:',
      subTitle:'Kitchen Facilities'
    },
    {
      title:'Exterior:',
      subTitle:'FinishBrick'
    },
    {
      title:'Swimming Pool:',
      subTitle:'Yes'
    },
    {
      title:'Elevetor:',
      subTitle:'Yes'
    },
    {
      title:'Fireplace:',
      subTitle:'Yes'
    },
    {
      title:'Free WiFi:',
      subTitle:'No'
    },
  ]

  ameneties = [
    'Air Conditioning','Swimming Pool','Central Heating','Laundry Room','Gym','Alarm','Window Covering','Internet','Pets Allow','Free WiFi','Car Parking','Spa & Massage'
  ]

  images=[
    "assets/img/p-1.jpg",
    "assets/img/p-2.jpg",
    "assets/img/p-3.jpg",
    "assets/img/p-4.jpg",
    "assets/img/p-5.jpg",
    "assets/img/p-6.jpg",
  ]
  
  ratting = [
    {value: '1', label: '01 Star',},
    {value: '2', label: '02 Star',},
    {value: '3', label: '03 Star',},
    {value: '4', label: '04 Star',},
    {value: '5', label: '05 Star',},
  ]
}
