import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormThreeComponent } from "../../../components/form/form-three/form-three.component";
import { propertyType } from '../../../data/data';
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { RouterLink } from '@angular/router';
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { ClientComponent } from "../../../components/client/client.component";
import { BestPlaceComponent } from "../../../components/property/best-place/best-place.component";
import { DownloadAppComponent } from "../../../components/download-app/download-app.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface PropertyType{
    icon: string;
    name: string;
    property: string;
}

@Component({
  selector: 'app-index-five',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FormThreeComponent,
    GridOneComponent,
    TeamOneComponent,
    PropertySaleComponent,
    ClientComponent,
    BestPlaceComponent,
    DownloadAppComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-five.component.html',
  styleUrl: './index-five.component.css'
})
export class IndexFiveComponent {

  propertyType:PropertyType[] = propertyType

}
