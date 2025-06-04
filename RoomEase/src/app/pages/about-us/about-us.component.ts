import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

declare var $: any;

@Component({
  selector: 'app-about-us',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamData = [
    {
      image:'assets/img/team-1.jpg',
      name:'Shaurya Preet',
      position:'Co-Founder'
    },
    {
      image:'assets/img/team-2.jpg',
      name:'Dhananjay Preet',
      position:'CEO'
    },
    {
      image:'assets/img/team-3.jpg',
      name:'Rahul Gilkrist',
      position:'Manager'
    },
    {
      image:'assets/img/team-4.jpg',
      name:'Adam Wilcard',
      position:'Agent'
    },
    {
      image:'assets/img/team-5.jpg',
      name:'Rahul Gilkrist',
      position:'Agent'
    },
    {
      image:'assets/img/team-6.jpg',
      name:'Adam Wilcard',
      position:'Agent'
    },
  ]

  private initialized = false;

  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.team-slide').slick({
          slidesToShow:4,
          arrows: false,
          dots: true,
          autoplay:true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1023,
              settings: {
              arrows: false,
              dots:true,
              slidesToShow:3
              }
            },
            {
              breakpoint: 768,
              settings: {
              arrows: false,
              slidesToShow:2
              }
            },
            {
              breakpoint: 480,
              settings: {
              arrows: false,
              slidesToShow:1
              }
            }
            ]
        });
      });
    }
  }

  aboutData = [
    {
      icon:'fa-solid fa-unlock-keyhole text-primary',
      title:'Fully Secure & 24x7 Dedicated Support',
      desc:'If you are an individual client, or just a business startup looking for good backlinks for your website.'
    },
    {
      icon:'fa-brands fa-twitter text-primary',
      title:'Manage your Social & Busness Account Carefully',
      desc:'If you are an individual client, or just a business startup looking for good backlinks for your website.'
    },
    {
      icon:'fa-solid fa-layer-group text-primary',
      title:'We are Very Hard Worker and loving',
      desc:'If you are an individual client, or just a business startup looking for good backlinks for your website.'
    },
  ]
}
