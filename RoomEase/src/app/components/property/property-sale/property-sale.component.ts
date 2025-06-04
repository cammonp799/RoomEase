import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { propertyData } from '../../../data/data';

interface Property{
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
  selector: 'app-property-sale',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './property-sale.component.html',
  styleUrl: './property-sale.component.css'
})
export class PropertySaleComponent {
  @Input() border:any

  propertyData:Property[] = propertyData

}
