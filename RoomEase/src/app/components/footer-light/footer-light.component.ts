import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer-light',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-light.component.html',
  styleUrl: './footer-light.component.css'
})
export class FooterLightComponent {
  year:any

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

  link1 = [
    {
      name:'About Us',
      path:'/about-us'
    },
    {
      name:'FAQs Page',
      path:'/faq'
    },
    {
      name:'Checkout',
      path:'/checkout'
    },
    {
      name:'Contact',
      path:'/contact'
    },
    {
      name:'Blog',
      path:'/blog'
    },
  ]

  link2 = ['Apartment','My Houses','Restaurant','Nightlife','Villas']

  link3 = ['My Profile','My account','My Property','Favorites','Cart']
}
