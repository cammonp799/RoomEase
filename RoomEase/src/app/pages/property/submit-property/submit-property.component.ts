import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { Select2Module } from 'ng-select2-component';
import { CommonModule } from '@angular/common';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-submit-property',
  imports: [
    NavbarComponent,
    RouterLink,
    Select2Module,
    CommonModule,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './submit-property.component.html',
  styleUrl: './submit-property.component.css'
})
export class SubmitPropertyComponent {

  file: string = '';

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = URL.createObjectURL(input.files[0]);
    }
  }

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
  ages = [
    {value: '1', label: '0 - 5 Years',},
    {value: '2', label: '0 - 10Years',},
    {value: '3', label: '0 - 15 Years',},
    {value: '4', label: '0 - 20 Years',},
    {value: '5', label: '20+ Years',},
  ]
}
