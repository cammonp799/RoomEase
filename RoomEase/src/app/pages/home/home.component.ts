import { Component } from '@angular/core';
import { NavLightComponent } from "../../components/navbar/nav-light/nav-light.component";
import { FormOneComponent } from "../../components/form/form-one/form-one.component";
import { PropertySlideComponent } from "../../components/property/property-slide/property-slide.component";
import { HowItsWorkComponent } from "../../components/how-its-work/how-its-work.component";
import { AchievementComponent } from "../../components/achievement/achievement.component";
import { ClientComponent } from "../../components/client/client.component";

import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [
    NavLightComponent,
    FormOneComponent,
    PropertySlideComponent,
    HowItsWorkComponent,
    AchievementComponent,
    ClientComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
