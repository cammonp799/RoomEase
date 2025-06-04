import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download-app',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './download-app.component.html',
  styleUrl: './download-app.component.css'
})
export class DownloadAppComponent {

}
