import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { Select2Module } from 'ng-select2-component'
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-submit-property-dashboard',
  imports: [
    CommonModule,
    RouterLink,
    AdminNavbarComponent,
    AdminSidebarComponent,
    Select2Module,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './submit-property-dashboard.component.html',
  styleUrl: './submit-property-dashboard.component.css'
})
export class SubmitPropertyDashboardComponent {
  show:boolean = false

  status = [
    {value: '1', label: 'For Rent',},
    {value: '2', label: 'For Sale',},
  ]
  ptypes = [
    {value: '1', label: 'Houses',},
    {value: '2', label: 'Apartment',},
    {value: '3', label: 'Villas',},
    {value: '4', label: 'Commercial',},
    {value: '5', label: 'Offices',},
    {value: '6', label: 'Garage',},
  ]
  rooms = [
    {value: '1', label: '1',},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
    {value: '6', label: '6',},
  ]
  bage = [
    {value: '1', label: '0 - 5 Years',},
    {value: '2', label: '0 - 10Years',},
    {value: '3', label: '0 - 15 Years',},
    {value: '4', label: '0 - 20 Years',},
    {value: '5', label: '20+ Years',},
  ]
}
