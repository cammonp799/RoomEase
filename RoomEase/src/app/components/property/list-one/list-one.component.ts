import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-list-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-one.component.html',
  styleUrl: './list-one.component.css'
})
export class ListOneComponent {
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
