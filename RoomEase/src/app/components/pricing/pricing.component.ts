import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingData } from '../../data/data';

interface PricingData{
    value: number;
    title: string;
    feature: string[];
    btn: string;
    bg: string;
    titleText: string;
}

@Component({
  selector: 'app-pricing',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricingData = pricingData
}
