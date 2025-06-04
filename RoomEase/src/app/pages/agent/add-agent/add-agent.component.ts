import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-add-agent',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterTopComponent,
    FooterComponent
],
  templateUrl: './add-agent.component.html',
  styleUrl: './add-agent.component.css'
})
export class AddAgentComponent {
  file: string = '';

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = URL.createObjectURL(input.files[0]);
    }
  }

}
