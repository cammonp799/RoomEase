import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-dark',
  imports: [
    CommonModule
  ],
  templateUrl: './subscribe-dark.component.html',
  styleUrl: './subscribe-dark.component.css'
})
export class SubscribeDarkComponent {
  images = [
    "assets/img/partners/booking-light.png",
    "assets/img/partners/columbia-light.png",
    "assets/img/partners/Payoneer-light.png",
    "assets/img/partners/Paypal-light.png",
    "assets/img/partners/razorpay-light.png",
    "assets/img/partners/microsoft-light.png",
    "assets/img/partners/trivago-light.png",
    "assets/img/partners/visa-light.png",
    "assets/img/partners/columbia-light.png",
  ]
}
