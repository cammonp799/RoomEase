import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-list-two',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-two.component.html',
  styleUrl: './list-two.component.css'
})
export class ListTwoComponent {
  @Input() item:any
  @Input() border:any
  
  private initialized = false;

  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.slick-slider').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      });
    }
  }
  }
