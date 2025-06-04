import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { propertyData } from '../../../data/data';
import { SidebarOneComponent } from "../../../components/property/sidebar-one/sidebar-one.component";
import { ShortComponent } from "../../../components/property/short/short.component";
import { GridLayoutTwoComponent } from "../../../components/property/grid-layout-two/grid-layout-two.component";
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
  selector: 'app-classical-layout-with-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    SidebarOneComponent,
    ShortComponent,
    GridLayoutTwoComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './classical-layout-with-sidebar.component.html',
  styleUrl: './classical-layout-with-sidebar.component.css'
})
export class ClassicalLayoutWithSidebarComponent {
  show:boolean = false

  propertyData:PropertyData[] = propertyData
}
