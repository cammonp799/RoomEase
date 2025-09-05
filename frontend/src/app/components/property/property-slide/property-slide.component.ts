import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { propertyData } from '../../../data/data';
import { GridLayoutComponent } from "../grid-layout/grid-layout.component";

declare var $: any;

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
  selector: 'app-property-slide',
  imports: [
    CommonModule,
    GridLayoutComponent
],
  templateUrl: './property-slide.component.html',
  styleUrl: './property-slide.component.css'
})
export class PropertySlideComponent {
  propertyData:PropertyData[] = propertyData

  private initialized = false;

  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.property-slide').slick({
          slidesToShow:3,
          arrows: false,
          dots: true,
          autoplay:true,
          autoplaySpeed: 2000,
          responsive: [
          {
            breakpoint: 1024,
            settings: {
            arrows: false,
            slidesToShow:2
            }
          },
          {
            breakpoint: 600,
            settings: {
            arrows: false,
            slidesToShow:1
            }
          }
          ]
        });
      });
    }
  }
}



