import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Select2Module } from 'ng-select2-component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-form-three',
  imports: [
    CommonModule,
    Select2Module,
    NgxSliderModule
  ],
  templateUrl: './form-three.component.html',
  styleUrl: './form-three.component.css'
})
export class FormThreeComponent {
  town = [
    {value: '1', label: 'Any Town',},
    {value: '2', label: 'Toronto',},
    {value: '3', label: 'Montreal',},
    {value: '4', label: 'Alberta',},
    {value: '5', label: 'Ontario',},
    {value: '5', label: 'Ottawa',},
  ]
  bedrooms = [
    {value: '1', label: '1',},
    {value: '2', label: '2',},
    {value: '3', label: '3',},
    {value: '4', label: '4',},
    {value: '5', label: '5',},
    {value: '5', label: '6',},
  ]

  value: number = 40;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };
}
