import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from "../../../components/navbar/nav-light/nav-light.component";
import { AchievementComponent } from "../../../components/achievement/achievement.component";
import { FormOneComponent } from "../../../components/form/form-one/form-one.component";
import { PropertySlideComponent } from "../../../components/property/property-slide/property-slide.component";
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { RouterLink } from '@angular/router';
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { DownloadAppComponent } from "../../../components/download-app/download-app.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterLightComponent } from "../../../components/footer-light/footer-light.component";

@Component({
  selector: 'app-index-two',
  imports: [
    CommonModule,
    RouterLink,
    NavLightComponent,
    AchievementComponent,
    FormOneComponent,
    PropertySlideComponent,
    PropertySaleComponent,
    TeamOneComponent,
    ClientComponent,
    PricingComponent,
    DownloadAppComponent,
    FooterTopComponent,
    FooterLightComponent
],
  templateUrl: './index-two.component.html',
  styleUrl: './index-two.component.css'
})
export class IndexTwoComponent {

}
