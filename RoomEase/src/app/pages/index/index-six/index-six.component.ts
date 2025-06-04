import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { AchievementComponent } from "../../../components/achievement/achievement.component";
import { PropertySlideComponent } from "../../../components/property/property-slide/property-slide.component";
import { PropertySaleComponent } from "../../../components/property/property-sale/property-sale.component";
import { RouterLink } from '@angular/router';
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { ClientComponent } from "../../../components/client/client.component";
import { PricingComponent } from "../../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-index-six',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AchievementComponent,
    PropertySlideComponent,
    PropertySaleComponent,
    TeamOneComponent,
    ClientComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-six.component.html',
  styleUrl: './index-six.component.css'
})
export class IndexSixComponent {

}
