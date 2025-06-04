import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-list-three',
  imports: [
    CommonModule,
    RouterLink,

  ],
  templateUrl: './list-three.component.html',
  styleUrl: './list-three.component.css'
})
export class ListThreeComponent {
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