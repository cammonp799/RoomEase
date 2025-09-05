import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavLightComponent } from "../../components/navbar/nav-light/nav-light.component";
import { FormOneComponent } from "../../components/form/form-one/form-one.component";
import { PropertySlideComponent } from "../../components/property/property-slide/property-slide.component";
import { HowItsWorkComponent } from "../../components/how-its-work/how-its-work.component";
import { AchievementComponent } from "../../components/achievement/achievement.component";
import { ClientComponent } from "../../components/client/client.component";

import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [
    NavLightComponent,
    FormOneComponent,
    PropertySlideComponent,
    HowItsWorkComponent,
    AchievementComponent,
    ClientComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit, AfterViewInit {
  videoLoaded = false;
  videoSrc = 'assets/img/villa.mp4'; // Définir l'URL explicitement
  @ViewChild('backgroundVideo') videoElement: ElementRef<HTMLVideoElement>;
  
  constructor() { }

  ngOnInit() {
    // Précharger la vidéo avant même le rendu du composant
    const preloadVideo = new Image();
    preloadVideo.src = this.videoSrc;
  }
  
  ngAfterViewInit() {
    // Délai plus long pour s'assurer que tout est bien chargé
    setTimeout(() => {
      this.initVideo();
    }, 500);
  }

  initVideo() {
    if (!this.videoElement || !this.videoElement.nativeElement) {
      console.error('Élément vidéo non trouvé');
      return;
    }

    const videoEl = this.videoElement.nativeElement;
    
    // Nettoyer les anciens écouteurs d'événements pour éviter les doublons
    videoEl.removeEventListener('loadeddata', () => {});
    videoEl.removeEventListener('canplaythrough', () => {});
    
    // Forcer le chargement avec l'URL explicite
    videoEl.src = this.videoSrc;
    videoEl.load();
    
    // Plusieurs tentatives de lecture
    videoEl.addEventListener('loadeddata', () => this.tryPlayVideo(videoEl));
    videoEl.addEventListener('canplaythrough', () => this.tryPlayVideo(videoEl));
    
    // Tenter de lire directement aussi
    this.tryPlayVideo(videoEl);
  }

  tryPlayVideo(videoEl: HTMLVideoElement) {
    if (this.videoLoaded) return; // Éviter les lectures multiples
    
    videoEl.play()
      .then(() => {
        console.log('Vidéo démarrée avec succès');
        this.videoLoaded = true;
      })
      .catch(err => {
        console.error('Échec de lecture automatique:', err);
        // Nouvelle tentative après un court délai
        setTimeout(() => {
          videoEl.play().catch(e => console.error('Échec de nouvelle tentative:', e));
        }, 1000);
      });
  }
}
