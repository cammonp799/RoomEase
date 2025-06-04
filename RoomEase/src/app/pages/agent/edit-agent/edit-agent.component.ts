import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../../components/navbar/admin-navbar/admin-navbar.component";
import { CommonModule } from '@angular/common';
import { FooterTopComponent } from "../../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-edit-agent',
  imports: [
    CommonModule,
    AdminNavbarComponent,
    FooterTopComponent,
    FooterComponent
],

  templateUrl: './edit-agent.component.html',
  styleUrl: './edit-agent.component.css'
})
export class EditAgentComponent {
  file: string = '';

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.file = URL.createObjectURL(input.files[0]);
    }
  }
}
