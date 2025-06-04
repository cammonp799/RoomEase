import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { propertyData } from '../../../data/data';
import { ShortComponent } from "../../../components/property/short/short.component";
import { GridLayoutComponent } from "../../../components/property/grid-layout/grid-layout.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
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
  selector: 'app-grid',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShortComponent,
    GridLayoutComponent,
    FooterTopComponent,
    FooterComponent,
    NgxSliderModule
],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  propertyData:PropertyData[] = propertyData
  value: number = 40;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };
}
