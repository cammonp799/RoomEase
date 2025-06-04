import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-change-password',
  imports: [
    CommonModule,
    RouterLink,
    AdminNavbarComponent,
    AdminSidebarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  show:boolean = false
}
