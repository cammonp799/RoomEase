import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Select2Module } from 'ng-select2-component';

@Component({
  selector: 'app-form-two',
  imports: [
    CommonModule,
    Select2Module,
  ],
  templateUrl: './form-two.component.html',
  styleUrl: './form-two.component.css'
})
export class FormTwoComponent {
  type:any = [
    {value: '1', label: 'Any Type',},
    {value: '2', label: 'Apartment',},
    {value: '3', label: 'Villas',},
    {value: '4', label: 'Commercial',},
    {value: '5', label: 'Offices',},
    {value: '5', label: 'Garage',},
  ];

  city:any = [
    {value: '1', label: 'New York City',},
    {value: '2', label: 'Chicago, Illinois',},
    {value: '3', label: 'Las Vegas',},
    {value: '4', label: 'New Orleans',},
    {value: '5', label: 'San Francisco',},
    {value: '5', label: 'Washington',},
  ];
}
