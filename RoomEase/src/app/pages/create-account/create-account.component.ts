import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-create-account',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
