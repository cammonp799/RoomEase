import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ShortComponent } from "../../../components/property/short/short.component";
import { SidebarOneComponent } from "../../../components/property/sidebar-one/sidebar-one.component";
import { propertyData } from '../../../data/data';
import { ListOneComponent } from "../../../components/property/list-one/list-one.component";
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
  selector: 'app-list-layout-new',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShortComponent,
    SidebarOneComponent,
    ListOneComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './list-layout-new.component.html',
  styleUrl: './list-layout-new.component.css'
})
export class ListLayoutNewComponent {
  show:boolean = false

  propertyData:PropertyData[] = propertyData
}
