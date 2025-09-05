// nav-light.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { navProperty, navProperty2 } from '../../../data/data.js';

@Component({
  selector: 'app-nav-light',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './nav-light.component.html',
  styleUrls: ['./nav-light.component.css']
})
export class NavLightComponent implements OnInit {
  // ton état existant
  activeMenu: any = {};
  windowWidth = window.innerWidth;
  toggle = false;
  activeTab = 1;
  scroll = false;
  current = '';

  data1 = navProperty;
  data2 = navProperty2;

  // Ajout du formGroup
  loginForm: FormGroup;
  loginError = '';
  isLoggedIn = false;

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

    window.addEventListener('scroll', () => this.scroll = window.scrollY > 50);
    window.addEventListener('resize', () => this.windowWidth = window.innerWidth);
    // À l'initialisation, on vérifie la présence du token
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  // Méthode appelée au submit du form
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
        // Stocke le token (ex : localStorage)
        localStorage.setItem('token', res.token);

        // Ferme la modal Bootstrap
        const loginModalEl = document.getElementById('login');
        // @ts-ignore
        const modal = bootstrap.Modal.getInstance(loginModalEl) || new bootstrap.Modal(loginModalEl);
        modal.hide();
        window.location.reload();

        // Redirige à la racine
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        this.loginError = err.error?.message || 'Échec de la connexion';
      }
    });
  }

   onLogout(): void {
    // Supprime le token
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    window.location.reload();

    // Redirige vers l'accueil
    this.router.navigate(['/']);
  }
}
