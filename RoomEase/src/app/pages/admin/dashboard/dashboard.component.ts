import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { RouterLink } from '@angular/router';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AdminSidebarComponent,
    RouterLink,
    FooterTopComponent,
    FooterComponent,
    AdminNavbarComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  show:boolean = false
}
