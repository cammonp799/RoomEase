import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { blogData } from '../../../data/data';
import { RouterLink } from '@angular/router';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface BlogData{
  id: number;
  image: string;
  date: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-blog',
  imports: [
    NavbarComponent,
    CommonModule,
    RouterLink,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogData:BlogData[] = blogData
}
