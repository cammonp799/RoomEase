import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { FaqsComponent } from "../../components/faqs/faqs.component";
import { faq2, faq3, faqData } from '../../data/data';
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

interface Data{
    id: number;
    title: string;
    desc: string;
}

@Component({
  selector: 'app-faq',
  imports: [
    CommonModule,
    NavbarComponent,
    FaqsComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  data:Data[] = faqData
  data2:Data[] = faq2
  data3:Data[] = faq3
}
