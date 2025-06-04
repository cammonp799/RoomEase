import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from "../../../components/navbar/nav-light/nav-light.component";
import { FormTwoComponent } from "../../../components/form/form-two/form-two.component";
import { RouterLink } from '@angular/router';
import { BestLoctionsComponent } from "../../../components/best-loctions/best-loctions.component";
import { GridOneComponent } from "../../../components/property/grid-one/grid-one.component";
import { HowItsWorkComponent } from "../../../components/how-its-work/how-its-work.component";
import { BlogComponent } from "../../../components/blog/blog.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-index-three',
  imports: [
    CommonModule,
    RouterLink,
    NavLightComponent,
    FormTwoComponent,
    BestLoctionsComponent,
    GridOneComponent,
    HowItsWorkComponent,
    BlogComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './index-three.component.html',
  styleUrl: './index-three.component.css'
})
export class IndexThreeComponent {

}
