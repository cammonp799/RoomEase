import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PropertyDetailComponent } from "../../../components/property/property-detail/property-detail.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { DetailSliderComponent } from "../../../components/property/detail-slider/detail-slider.component";
import { PropertySidebarTwoComponent } from "../../../components/property/property-sidebar-two/property-sidebar-two.component";
import { ActivatedRoute } from '@angular/router';
import { propertyData } from '../../../data/data';

@Component({
  selector: 'app-single-property-4',
  imports: [
    NavbarComponent,
    PropertyDetailComponent,
    FooterTopComponent,
    FooterComponent,
    DetailSliderComponent,
    PropertySidebarTwoComponent
],
  templateUrl: './single-property-4.component.html',
  styleUrl: './single-property-4.component.css'
})
export class SingleProperty4Component {
    id:any
   data:any
 
   constructor(private router:ActivatedRoute){}
   ngOnInit(): void {
     this.id=this.router.snapshot.params['id']
 
     this.data = propertyData.find(item => item.id === parseInt(this.id))
   }
}
