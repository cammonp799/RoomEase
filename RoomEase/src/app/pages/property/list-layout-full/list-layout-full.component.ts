import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { propertyData } from '../../../data/data';
import { ShortComponent } from "../../../components/property/short/short.component";
import { ListFourComponent } from "../../../components/property/list-four/list-four.component";
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
  selector: 'app-list-layout-full',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShortComponent,
    ListFourComponent,
    FooterTopComponent,
    FooterComponent,
    NgxSliderModule
],
  templateUrl: './list-layout-full.component.html',
  styleUrl: './list-layout-full.component.css'
})
export class ListLayoutFullComponent {
  propertyData:PropertyData[] = propertyData

  value: number = 40;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };
}
