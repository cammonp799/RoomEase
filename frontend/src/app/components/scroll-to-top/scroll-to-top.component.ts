import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scroll-to-top',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
  scroll:boolean = false
  @HostListener("window:scroll",[])

  ngOnInit(): void {
    if(window.scrollY > 50){
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  topFunction(e:any){
    e.preventDefault()
    window.scrollTo(0, 0)
  }
}
