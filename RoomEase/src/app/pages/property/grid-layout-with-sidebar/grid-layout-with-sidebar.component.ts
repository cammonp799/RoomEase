import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { SidebarOneComponent } from "../../../components/property/sidebar-one/sidebar-one.component";
import { RouterLink } from '@angular/router';
import { ShortComponent } from "../../../components/property/short/short.component";
import { propertyData } from '../../../data/data';
import { GridLayoutComponent } from "../../../components/property/grid-layout/grid-layout.component";
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
  selector: 'app-grid-layout-with-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    SidebarOneComponent,
    ShortComponent,
    GridLayoutComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './grid-layout-with-sidebar.component.html',
  styleUrl: './grid-layout-with-sidebar.component.css'
})
export class GridLayoutWithSidebarComponent {
  show:boolean = false
  propertyData:PropertyData[] = propertyData
}
