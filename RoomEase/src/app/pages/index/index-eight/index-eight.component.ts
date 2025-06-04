import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarTopComponent } from "../../../components/navbar/navbar-top/navbar-top.component";
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { HowItsWorkComponent } from "../../../components/how-its-work/how-its-work.component";
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { explorePlace } from '../../../data/data';
import { ExplorePlaceComponent } from "../../../components/property/explore-place/explore-place.component";
import { ClientComponent } from "../../../components/client/client.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

declare var $: any;

interface ExplorePlace{
  image: string;
  loction: string;
  property: string;
}

@Component({
  selector: 'app-index-eight',
  imports: [
    CommonModule,
    RouterLink,
    NavbarTopComponent,
    NavbarComponent,
    HowItsWorkComponent,
    GridOneComponent,
    ExplorePlaceComponent,
    ClientComponent,
    TeamOneComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-eight.component.html',
  styleUrl: './index-eight.component.css'
})
export class IndexEightComponent {

  explorePlace:ExplorePlace[] = explorePlace

  private initialized = false;
  
  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.home-slider').slick({
          centerMode:false,
          slidesToShow:1,
          speed: 5000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
          {
            breakpoint: 768,
            settings: {
            arrows:true,
            slidesToShow:1
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

}
