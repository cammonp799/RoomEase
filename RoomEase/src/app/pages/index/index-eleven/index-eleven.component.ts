import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FormThreeComponent } from "../../../components/form/form-three/form-three.component";
import { categoriesData } from '../../../data/data';
import { CommonModule } from '@angular/common';
import { BestLoctionsComponent } from "../../../components/best-loctions/best-loctions.component";
import { RouterLink } from '@angular/router';
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { DownloadAppComponent } from "../../../components/download-app/download-app.component";
import { SubscribeDarkComponent } from "../../../components/subscribe-dark/subscribe-dark.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface CategoriesData{
    icon: string;
    title: string;
    subTitle: string;
    bg: string;
}

@Component({
  selector: 'app-index-eleven',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FormThreeComponent,
    BestLoctionsComponent,
    GridOneComponent,
    TeamOneComponent,
    ClientComponent,
    PricingComponent,
    DownloadAppComponent,
    SubscribeDarkComponent,
    FooterComponent
],

  templateUrl: './index-eleven.component.html',
  styleUrl: './index-eleven.component.css'
})
export class IndexElevenComponent {
  categoriesData:CategoriesData[] = categoriesData
}
