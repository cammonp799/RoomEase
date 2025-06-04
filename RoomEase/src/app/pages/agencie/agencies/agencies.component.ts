import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { agencyData } from '../../../data/data';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface AgencyData{
  id: number;
  image: string;
  agent: string;
  name: string;
  property: string;
}

@Component({
  selector: 'app-agencies',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css'
})
export class AgenciesComponent {
  agencyData:AgencyData[] = agencyData
}
