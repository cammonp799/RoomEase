import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";

@Component({
  selector: 'app-my-profile',
  imports: [
    RouterLink,
    CommonModule,
    NavbarComponent,
    AdminSidebarComponent,
    FooterComponent,
    FooterTopComponent
],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {
  show:boolean = false
}
