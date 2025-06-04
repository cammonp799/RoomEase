import { Component } from '@angular/core';
import { FullNavbarComponent } from "../../../components/navbar/full-navbar/full-navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MapTwoComponent } from "../../../components/map-two/map-two.component";
import { propertyData } from '../../../data/data';
import { ListTwoComponent } from "../../../components/property/list-two/list-two.component";

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
  selector: 'app-half-map-2',
  imports: [
    CommonModule,
    RouterLink,
    FullNavbarComponent,
    MapTwoComponent,
    ListTwoComponent
],
  templateUrl: './half-map-2.component.html',
  styleUrl: './half-map-2.component.css'
})
export class HalfMap2Component {

  propertyData:PropertyData[] = propertyData

}
