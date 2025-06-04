import { Component } from '@angular/core';
import { FullNavbarComponent } from "../../../components/navbar/full-navbar/full-navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { propertyData } from '../../../data/data';
import { ListFourComponent } from "../../../components/property/list-four/list-four.component";
import { MapTwoComponent } from "../../../components/map-two/map-two.component";

import { Select2Module } from 'ng-select2-component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

interface PropertyData{
  id: number;
  image: string[];
  tag: string[];
  tag2: string;
  type: string;
  name: string;
  loction: string;
  size: string;
  beds: string;
  sqft: string;
  value: string;
}

@Component({
  selector: 'app-half-map',
  imports: [
    FullNavbarComponent,
    CommonModule,
    RouterLink,
    ListFourComponent,
    MapTwoComponent,
    Select2Module,
    NgxSliderModule
],
  templateUrl: './half-map.component.html',
  styleUrl: './half-map.component.css'
})
export class HalfMapComponent {
  propertyData:PropertyData[] = propertyData

  ptypes = [
    {value: '1', label: 'Apartment',},
    {value: '2', label: 'Condo',},
    {value: '3', label: 'Family',},
    {value: '4', label: 'Houses',},
    {value: '5', label: 'Villa',},
  ]
  bedrooms = [
    {value: '1', label: '1',},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
  ]

  value: number = 40;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };
}
