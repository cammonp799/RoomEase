import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { agentData } from '../../../data/data';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface AgentData{
    id: number;
    image: string;
    name: string;
    property: string;
    call: string;
    review: string;
}

@Component({
  selector: 'app-agents',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent {
  agentData:AgentData[] = agentData
}
