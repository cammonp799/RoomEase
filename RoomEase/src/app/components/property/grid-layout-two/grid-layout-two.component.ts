import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-grid-layout-two',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './grid-layout-two.component.html',
  styleUrl: './grid-layout-two.component.css'
})
export class GridLayoutTwoComponent {
  @Input() item:any
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
