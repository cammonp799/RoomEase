import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { propertyType } from '../../../data/data';
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { BestLoctionsComponent } from "../../../components/best-loctions/best-loctions.component";
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { CtaComponent } from "../../../components/cta/cta.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { BlogComponent } from "../../../components/blog/blog.component";
import { SubscribeLightComponent } from "../../../components/subscribe-light/subscribe-light.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface PropertyType{
  icon: string;
  name: string;
  property: string;
}

@Component({
  selector: 'app-index-ten',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    GridOneComponent,
    BestLoctionsComponent,
    PropertySaleComponent,
    CtaComponent,
    TeamOneComponent,
    ClientComponent,
    BlogComponent,
    SubscribeLightComponent,
    FooterComponent
],
  templateUrl: './index-ten.component.html',
  styleUrl: './index-ten.component.css'
})
export class IndexTenComponent {
  propertyType:PropertyType[] = propertyType
}
