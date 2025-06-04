import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PropertyDetailComponent } from "../../../components/property/property-detail/property-detail.component";
import { PropertySidebarComponent } from "../../../components/property/property-sidebar/property-sidebar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { propertyData } from '../../../data/data';

@Component({
  selector: 'app-single-property-3',
  imports: [
    CommonModule,
    NavbarComponent,
    RouterLink,
    PropertyDetailComponent,
    PropertySidebarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './single-property-3.component.html',
  styleUrl: './single-property-3.component.css'
})
export class SingleProperty3Component {
  id:any
  data:any

  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id']

    this.data = propertyData.find(item => item.id === parseInt(this.id))
  }
}
