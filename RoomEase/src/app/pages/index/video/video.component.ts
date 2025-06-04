import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from "../../../components/navbar/nav-light/nav-light.component";
import { FormOneComponent } from "../../../components/form/form-one/form-one.component";
import { AchievementComponent } from "../../../components/achievement/achievement.component";
import { PropertySlideComponent } from "../../../components/property/property-slide/property-slide.component";
import { RouterLink } from '@angular/router';
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-video',
  imports: [
    CommonModule,
    RouterLink,
    NavLightComponent,
    FormOneComponent,
    AchievementComponent,
    PropertySlideComponent,
    PropertySaleComponent,
    TeamOneComponent,
    ClientComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

}
