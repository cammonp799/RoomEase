import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-pricings',
  imports: [
    CommonModule,
    NavbarComponent,
    PricingComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './pricings.component.html',
  styleUrl: './pricings.component.css'
})
export class PricingsComponent {

}
