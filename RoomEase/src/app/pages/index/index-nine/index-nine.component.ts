import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from "../../../components/navbar/nav-light/nav-light.component";
import { FormThreeComponent } from "../../../components/form/form-three/form-three.component";
import { explorePlace } from '../../../data/data';
import { RouterLink } from '@angular/router';
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { PropertySlideComponent } from "../../../components/property/property-slide/property-slide.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { DownloadAppComponent } from "../../../components/download-app/download-app.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface ExplorePlace{
    image: string;
    loction: string;
    property: string;
}

@Component({
  selector: 'app-index-nine',
  imports: [
    CommonModule,
    RouterLink,
    NavLightComponent,
    FormThreeComponent,
    PropertySlideComponent,
    PropertySaleComponent,
    TeamOneComponent,
    ClientComponent,
    PricingComponent,
    DownloadAppComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-nine.component.html',
  styleUrl: './index-nine.component.css'
})
export class IndexNineComponent {
  explorePlace:ExplorePlace[] = explorePlace
}
