import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { agentData, propertyData } from '../../../data/data';
import { GridLayoutComponent } from "../../../components/property/grid-layout/grid-layout.component";
import { PropertySidebarComponent } from "../../../components/property/property-sidebar/property-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface PropertyData{
  id: number;
  image: string[];
  tag: string[];
  tag2: string;
  type: string;
  name: string;
  loction: string;
  size: string;
  beds: string;
  sqft: string;
  value: string;
}

interface AgentData{
    id: number;
    image: string;
    name: string;
    property: string;
    call: string;
    review: string;
}

@Component({
  selector: 'app-agency-page',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    GridLayoutComponent,
    PropertySidebarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './agency-page.component.html',
  styleUrl: './agency-page.component.css'
})
export class AgencyPageComponent {
  agentData:AgentData[] = agentData
  propertyData:PropertyData[] = propertyData
}
