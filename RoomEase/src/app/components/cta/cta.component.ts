import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-cta',
  imports: [
    CommonModule,
    CountUpModule
  ],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {

}
