import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { MapOneComponent } from "../../../components/map-one/map-one.component";
import { propertyData } from '../../../data/data';
import { ShortComponent } from "../../../components/property/short/short.component";
import { SidebarOneComponent } from "../../../components/property/sidebar-one/sidebar-one.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { GridLayoutTwoComponent } from "../../../components/property/grid-layout-two/grid-layout-two.component";
import { FooterComponent } from "../../../components/footer/footer.component";



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
  selector: 'app-classical-layout-with-map',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MapOneComponent,
    ShortComponent,
    SidebarOneComponent,
    FooterTopComponent,
    GridLayoutTwoComponent,
    FooterComponent
],
  templateUrl: './classical-layout-with-map.component.html',
  styleUrl: './classical-layout-with-map.component.css'
})
export class ClassicalLayoutWithMapComponent {
  show:boolean = false

  propertyData:PropertyData[] = propertyData
}
