import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-component',
  imports: [
    RouterLink,
    CommonModule,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {

}
