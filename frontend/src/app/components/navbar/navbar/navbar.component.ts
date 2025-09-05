// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { navProperty, navProperty2 } from '../../../data/data.js';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() transparent: any;

  // Formulaire de connexion
  loginForm!: FormGroup;
  loginError = '';
  isLoggedIn = false;

  // Navigation state
  activeMenu: { [key: string]: { [key: string]: boolean } } = {};
  windowWidth: number = window.innerWidth;
  toggle: boolean = false;
  scroll: boolean = false;
  current: string = '';
  data1 = navProperty;
  data2 = navProperty2;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    // Initialisation du formulaire
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.current = this.router.url;
    this.isLoggedIn = !!localStorage.getItem('token');

    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY > 50;
    });
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = this.loginForm.value;
    this.http.post<{ token: string }>(
      'http://localhost:3000/api/auth/login',
      payload
    ).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        // Ferme la modal Bootstrap
        const loginModalEl = document.getElementById('login');
        // @ts-ignore
        const modal = bootstrap.Modal.getOrCreateInstance(loginModalEl);
        modal.hide();
        // Recharge pour mettre à jour l'état
        window.location.reload();
      },
      error: (err: HttpErrorResponse) => {
        this.loginError = err.error?.message || 'Échec de la connexion';
      }
    });
  }

  onLogout(): void {
    localStorage.removeItem('token');
    // Recharge pour mettre à jour l'état
    window.location.reload();
  }

  handleMouseEnter(menu: string, submenu?: string): void {
    if (!this.activeMenu[menu]) {
      this.activeMenu[menu] = {};
    }
    this.activeMenu[menu][submenu || 'main'] = true;
  }

  handleMouseLeave(menu: string, submenu?: string): void {
    if (this.activeMenu[menu]) {
      this.activeMenu[menu][submenu || 'main'] = false;
    }
  }
}
