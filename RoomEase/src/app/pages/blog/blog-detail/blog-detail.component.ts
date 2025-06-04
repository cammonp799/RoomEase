import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { blogData } from '../../../data/data';

@Component({
  selector: 'app-blog-detail',
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  id:any
  data:any
  
  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.data = blogData.find((item)=>item.id === parseInt(this.id))
  }

  blogSocial = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-linkedin-in",
    "fab fa-vk",
    "fab fa-tumblr",
  ]

  blogSocia2 = [
    "fab fa-facebook-f",
    "fab fa-twitter",
    "fab fa-behance",
    "fab fa-youtube",
    "fab fa-linkedin-in",
  ]

  categories = [
    {
      title:'Lifestyle',
      value:'09'
    },
    {
      title:'Travel',
      value:'12'
    },
    {
      title:'Fashion',
      value:'19'
    },
    {
      title:'Branding',
      value:'17'
    },
    {
      title:'Music',
      value:'10'
    },
  ]

  trandingPost = [
    {
      image:'assets/img/tour-1.jpg',
      title:'Alonso Kelina Falao Asiano Pero',
      time:'10 Min ago'
    },
    {
      image:'assets/img/tour-2.jpg',
      title:'It is a long established fact that a reader',
      time:'2 Hours ago'
    },
    {
      image:'assets/img/tour-3.jpg',
      title:'Many desktop publish packages and web',
      time:'4 Hours ago'
    },
    {
      image:'assets/img/tour-4.jpg',
      title:'Various versions have evolved over the years',
      time:'7 Hours ago'
    },
    {
      image:'assets/img/tour-5.jpg',
      title:'Photo booth anim 8-bit PBR 3 wolf moon.',
      time:'3 Days ago'
    },
  ]

  tag = [
    'Lifestyle',
    'Travel',
    'Fashion',
    'Branding',
    'Music',
  ]
}
