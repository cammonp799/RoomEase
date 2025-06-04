import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';

import { Select2Module } from 'ng-select2-component';
import { RouterLink } from '@angular/router';
import { HowItsWorkComponent } from "../../../components/how-its-work/how-its-work.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { propertyData } from '../../../data/data';
import { BestLoctionsComponent } from "../../../components/best-loctions/best-loctions.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

declare var $: any;

@Component({
  selector: 'app-index-one',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    Select2Module,
    HowItsWorkComponent,
    SlickCarouselModule,
    GridOneComponent,
    BestLoctionsComponent,
    ClientComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent,
],
  templateUrl: './index-one.component.html',
  styleUrl: './index-one.component.css'
})
export class IndexOneComponent {
  minPrice:any = [
    {value: '1', label: '$500',},
    {value: '2', label: '$1000',},
    {value: '3', label: '$1500',},
    {value: '4', label: '$2000',},
    {value: '5', label: '$3000',},
  ];

  maxPrice:any = [
    {value: '1', label: '$1000',},
    {value: '2', label: '$1500',},
    {value: '3', label: '$2000',},
    {value: '4', label: '$3000',},
    {value: '5', label: '$5000',},
  ];

  type:any = [
    {value: '1', label: 'Rental',},
    {value: '2', label: 'Villas',},
    {value: '3', label: 'Offices',},
    {value: '4', label: 'Condos',},
    {value: '5', label: 'Studios',},
  ];
  bedrooms:any = [
    {value: '1', label: '1',},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
  ];
  location:any = [
    {value: '1', label: '1',},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
  ];

  data = propertyData
}
