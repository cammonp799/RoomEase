import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { MapOneComponent } from "../../../components/map-one/map-one.component";
import { HowItsWorkComponent } from "../../../components/how-its-work/how-its-work.component";
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { RouterLink } from '@angular/router';
import { BestLoctionsComponent } from "../../../components/best-loctions/best-loctions.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-map',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MapOneComponent,
    HowItsWorkComponent,
    GridOneComponent,
    BestLoctionsComponent,
    ClientComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

}
