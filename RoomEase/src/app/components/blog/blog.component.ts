import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData } from '../../data/data';

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
    CommonModule,
    RouterLink,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogData:BlogData[] = blogData
}
