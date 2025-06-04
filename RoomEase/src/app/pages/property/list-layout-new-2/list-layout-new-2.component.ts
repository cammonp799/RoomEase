import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { SidebarOneComponent } from "../../../components/property/sidebar-one/sidebar-one.component";
import { ShortComponent } from "../../../components/property/short/short.component";
import { propertyData } from '../../../data/data';
import { ListThreeComponent } from "../../../components/property/list-three/list-three.component";
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
  selector: 'app-list-layout-new-2',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    SidebarOneComponent,
    ShortComponent,
    ListThreeComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './list-layout-new-2.component.html',
  styleUrl: './list-layout-new-2.component.css'
})
export class ListLayoutNew2Component {
  show:boolean = false 

  propertyData:PropertyData[] = propertyData
}
