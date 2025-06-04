import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FormOneComponent } from "../../../components/form/form-one/form-one.component";
import { explorePlace, propertyData, teamData } from '../../../data/data';
import { GridLayoutComponent } from "../../../components/property/grid-layout/grid-layout.component";
import { ExplorePlaceComponent } from "../../../components/property/explore-place/explore-place.component";
import { RouterLink } from '@angular/router';
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

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

interface ExplorePlace{
    image: string;
    loction: string;
    property: string;
}

interface TeamData{
    image: string;
    name: string;
    property: string;
    call: string;
    review: string;
}

@Component({
  selector: 'app-index-four',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FormOneComponent,
    GridLayoutComponent,
    ExplorePlaceComponent,
    ClientComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-four.component.html',
  styleUrl: './index-four.component.css'
})
export class IndexFourComponent {
  propertyData:PropertyData[] = propertyData
  explorePlace:ExplorePlace[] = explorePlace
  teamData:TeamData[] = teamData

  private initialized = false;

  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.slide-livok').slick({
          slidesToShow:4,
          arrows: true,
          dots: false,
          autoplay:true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint:1400,
              settings: {
              arrows: true,
              slidesToShow:3
              }
            },
            {
              breakpoint:1023,
              settings: {
              arrows: true,
              slidesToShow:2
              }
            },
            {
              breakpoint:800,
              settings: {
              arrows: true,
              slidesToShow:1
              }
            }
          ]
        });
      });
    }
  }
}
