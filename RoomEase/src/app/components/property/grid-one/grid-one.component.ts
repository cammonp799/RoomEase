import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { propertyData } from '../../../data/data';
import { GridLayoutComponent } from "../grid-layout/grid-layout.component";


interface Property{
    id: number;
    image: string[];
    tag: string[];
    tag2: string;
    type: string;
    name: string;
    loction: string;
    size: string;
    beds: string;
    sqft: string;
    value: string;
}

@Component({
  selector: 'app-grid-one',
  imports: [
    CommonModule,
    GridLayoutComponent
],
  templateUrl: './grid-one.component.html',
  styleUrl: './grid-one.component.css'
})
export class GridOneComponent {
  @Input() border:any
  propertyData:Property[] = propertyData

}
