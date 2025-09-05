import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { FooterTopComponent } from "../../components/footer-top/footer-top.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Supprimer overlays et réactiver scroll
    document.querySelector('.overlay')?.remove();
    document.querySelector('.modal-backdrop')?.remove();
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.classList.remove('modal-open', 'noscroll', 'disable-scroll');
    document.documentElement.classList.remove('modal-open', 'noscroll', 'disable-scroll');

    // Initialisation du formulaire
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      telephone: [''],
      dateNaissance: ['', Validators.required] // Ajout du champ dateNaissance
    });
  }

 onSubmit(): void {
  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  this.loading = true;
  const payload = this.registerForm.value;

  this.http.post<{ id: number }>(
    'http://localhost:3000/api/auth/register',
    payload
  ).subscribe({
    next: () => {
      this.loading = false;

      // 1) On redirige d'abord vers la racine
      this.router.navigate(['/']).then(() => {
        // 2) On ouvre la modal de connexion (ID="#login")
        const loginModalEl = document.getElementById('login');
        // @ts-ignore : bootstrap défini globalement
        const modal = bootstrap.Modal.getOrCreateInstance(loginModalEl);
        modal.show();
      });
    },
    error: (err: HttpErrorResponse) => {
      this.loading = false;
      this.errorMessage = err.error?.message || 'Erreur lors de la création du compte';
    }
  });
}
}
