import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { RouterLink } from '@angular/router';
import { Select2Module } from 'ng-select2-component';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-payment',
  imports: [
    CommonModule,
    RouterLink,
    AdminNavbarComponent,
    Select2Module,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})

export class PaymentComponent {
  country = [
    {value: '1', label: 'United State',},
    {value: '2', label: 'United kingdom',},
    {value: '3', label: 'India',},
    {value: '4', label: 'Alberta',},
    {value: '5', label: 'Canada',},
  ]
  city = [
    {value: '1', label: 'Canada, USA',},
    {value: '2', label: 'California',},
    {value: '3', label: 'Newyork',},
    {value: '4', label: 'Liverpool',},
  ]
}
