import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLightComponent } from "../../../components/navbar/nav-light/nav-light.component";
import { FormTwoComponent } from "../../../components/form/form-two/form-two.component";
import { ExplorePlaceComponent } from "../../../components/property/explore-place/explore-place.component";
import { explorePlace } from '../../../data/data';
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { TeamOneComponent } from "../../../components/team-one/team-one.component";
import { HowItsWorkComponent } from "../../../components/how-its-work/how-its-work.component";
import { BlogComponent } from "../../../components/blog/blog.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-index-seven',
  imports: [
    CommonModule,
    RouterLink,
    NavLightComponent,
    FormTwoComponent,
    ExplorePlaceComponent,
    GridOneComponent,
    TeamOneComponent,
    HowItsWorkComponent,
    BlogComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-seven.component.html',
  styleUrl: './index-seven.component.css'
})

export class IndexSevenComponent {
  explorePlace= explorePlace
}
