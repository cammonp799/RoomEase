import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminSidebarComponent } from "../../../components/admin-sidebar/admin-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-bookmark-list',
  imports: [
    CommonModule,
    RouterLink,
    AdminNavbarComponent,
    AdminSidebarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css'
})
export class BookmarkListComponent {
  show:boolean = false

  data = [
    {
      image:'assets/img/p-2.jpg',
      name:'Serene Uptown',
      loction:'6 Bishop Ave. Perkasie, PA',
      value:'$900 / monthly'
    },
    {
      image:'assets/img/p-3.jpg',
      name:'Oak Tree Villas',
      loction:'71 Lower River Dr. Bronx, NY',
      value:'$535,000'
    },
    {
      image:'assets/img/p-4.jpg',
      name:'Selway Villas',
      loction:'33 William St. Northbrook, IL',
      value:'$420,000'
    },
    {
      image:'assets/img/p-5.jpg',
      name:'7843 Durham Avenue, MD',
      loction:'6 Bishop Ave. Perkasie, PA',
      value:'$420,000'
    },
  ]
}
