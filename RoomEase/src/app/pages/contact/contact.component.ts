import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
