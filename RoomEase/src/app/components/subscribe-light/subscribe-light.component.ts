import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-light',
  imports: [
    CommonModule,

  ],
  templateUrl: './subscribe-light.component.html',
  styleUrl: './subscribe-light.component.css'
})
export class SubscribeLightComponent {
  images = [
    "assets/img/partners/booking.png",
    "assets/img/partners/columbia.png",
    "assets/img/partners/Payoneer.png",
    "assets/img/partners/Paypal.png",
    "assets/img/partners/razorpay.png",
    "assets/img/partners/microsoft.png",
    "assets/img/partners/trivago.png",
    "assets/img/partners/visa.png",
    "assets/img/partners/columbia.png",
  ]
}
