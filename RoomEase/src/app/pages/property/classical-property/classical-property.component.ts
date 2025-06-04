import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { propertyData } from '../../../data/data';
import { ShortComponent } from "../../../components/property/short/short.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { GridLayoutTwoComponent } from "../../../components/property/grid-layout-two/grid-layout-two.component";

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
  selector: 'app-classical-property',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShortComponent,
    FooterTopComponent,
    FooterComponent,
    NgxSliderModule,
    GridLayoutTwoComponent
],
  templateUrl: './classical-property.component.html',
  styleUrl: './classical-property.component.css'
})
export class ClassicalPropertyComponent {
    propertyData:PropertyData[] = propertyData
    value: number = 40;
    highValue: number = 60;
    
    options: any = {
      floor: 0,
      ceil: 100,
    };

}
