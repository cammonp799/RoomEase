import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Select2Module } from 'ng-select2-component';

@Component({
  selector: 'app-short',
  imports: [
    CommonModule,
    Select2Module,
  ],
  templateUrl: './short.component.html',
  styleUrl: './short.component.css'
})
export class ShortComponent {
  type:any = [
    {value: '1', label: 'Low Price',},
    {value: '2', label: 'High Price',},
    {value: '3', label: 'Most Popular',},
  ];
}
