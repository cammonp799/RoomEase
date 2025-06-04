import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PropertySidebarComponent } from "../../../components/property/property-sidebar/property-sidebar.component";
import { agentData, propertyData } from '../../../data/data';
import { GridLayoutComponent } from "../../../components/property/grid-layout/grid-layout.component";
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

@Component({
  selector: 'app-agent-page',
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    PropertySidebarComponent,
    GridLayoutComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './agent-page.component.html',
  styleUrl: './agent-page.component.css'
})
export class AgentPageComponent {
  propertyData:PropertyData[] = propertyData

  id:any
  data:any

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.data = agentData.find((item)=>item.id === parseInt(this.id))
  }
}
