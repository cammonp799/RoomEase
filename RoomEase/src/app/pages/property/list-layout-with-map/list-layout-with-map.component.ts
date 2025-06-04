import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { MapOneComponent } from "../../../components/map-one/map-one.component";
import { SidebarTwoComponent } from "../../../components/property/sidebar-two/sidebar-two.component";
import { ShortComponent } from "../../../components/property/short/short.component";
import { propertyData } from '../../../data/data';
import { ListFourComponent } from "../../../components/property/list-four/list-four.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
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
  selector: 'app-list-layout-with-map',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MapOneComponent,
    SidebarTwoComponent,
    ShortComponent,
    ListFourComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './list-layout-with-map.component.html',
  styleUrl: './list-layout-with-map.component.css'
})
export class ListLayoutWithMapComponent {
  show:boolean = false

  propertyData:PropertyData[] = propertyData 

}
