import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { Select2Module } from 'ng-select2-component';
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    Select2Module,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  country = [
    { value: '1', label: 'United State' },
    { value: '2', label: 'United kingdom' },
    { value: '3', label: 'India' },
    { value: '4', label: 'Canada' },
  ]

  city = [
    { value: '1', label: 'Punjab' },
    { value: '2', label: 'Chandigarh' },
    { value: '3', label: 'Allahabad' },
    { value: '4', label: 'Lucknow' },
  ]
}
