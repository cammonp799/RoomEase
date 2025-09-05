import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { clientData } from '../../data/data';

declare var $: any;

interface ClientData{
    image: string;
    quote: string;
    desc: string;
    name: string;
    position: string;
}

@Component({
  selector: 'app-client',
  imports: [
    CommonModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
 
  clientData:ClientData[] = clientData

  ngAfterViewInit(): void {
    $('#smart-textimonials').slick({
      slidesToShow:3,
      infinite: true,
      speed: 300,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToShow:2
        }
      },
      {
        breakpoint: 480,
        settings: {
        arrows: false,
        slidesToShow:1
        }
      }
      ]
    });
  }
}
