import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-detail-slider',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detail-slider.component.html',
  styleUrl: './detail-slider.component.css'
})
export class DetailSliderComponent {

  private initialized = false;

  ngAfterViewChecked(): void {
    if (!this.initialized) {
      this.initialized = true;
      setTimeout(() => {
        $('.featured_slick_gallery-slide').slick({
          centerMode: true,
          infinite:true,
          centerPadding: '40px',
          slidesToShow:2,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
            breakpoint: 768,
            settings: {
            arrows:true,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow:3
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow:1
            }
            }
          ],
        });
      });
    }
  }
  }
