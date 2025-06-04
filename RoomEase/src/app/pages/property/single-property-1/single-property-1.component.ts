import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PropertyDetailComponent } from "../../../components/property/property-detail/property-detail.component";
import { PropertySidebarComponent } from "../../../components/property/property-sidebar/property-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { DetailSliderComponent } from "../../../components/property/detail-slider/detail-slider.component";
import { ActivatedRoute } from '@angular/router';
import { propertyData } from '../../../data/data';

@Component({
  selector: 'app-single-property-1',
  imports: [
    NavbarComponent,
    PropertyDetailComponent,
    PropertySidebarComponent,
    FooterTopComponent,
    FooterComponent,
    DetailSliderComponent
],
  templateUrl: './single-property-1.component.html',
  styleUrl: './single-property-1.component.css'
})
export class SingleProperty1Component {
    id:any
    data:any

    constructor(private router:ActivatedRoute){}
    ngOnInit(): void {
      this.id=this.router.snapshot.params['id']

      this.data = propertyData.find(item => item.id === parseInt(this.id))
    }
  }
