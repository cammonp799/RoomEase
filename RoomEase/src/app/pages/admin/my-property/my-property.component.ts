import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-my-property',
  imports: [
    CommonModule,
    RouterLink,
    AdminNavbarComponent,
    AdminSidebarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './my-property.component.html',
  styleUrl: './my-property.component.css'
})
export class MyPropertyComponent {
  show:boolean = false

  data = [
    {
      image:'assets/img/p-1.jpg',
      name:'My List property Name'
    },
    {
      image:'assets/img/p-2.jpg',
      name:'My List property Name'
    },
    {
      image:'assets/img/p-3.jpg',
      name:'My List property Name'
    },
    {
      image:'assets/img/p-4.jpg',
      name:'My List property Name'
    },
    {
      image:'assets/img/p-5.jpg',
      name:'My List property Name'
    },
  ]
}
