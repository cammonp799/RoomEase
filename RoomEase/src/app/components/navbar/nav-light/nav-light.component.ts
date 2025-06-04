// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {navProperty,navProperty2} from '../../../data/data.js'

@Component({
  selector: 'app-nav-light',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './nav-light.component.html',
  styleUrl: './nav-light.component.css'
})
export class NavLightComponent {
  activeMenu: { [key: string]: { [key: string]: boolean } } = {};
  windowWidth: number = window.innerWidth;
  toggle: boolean = false;
  activeTab: number = 1;

  data1 = navProperty
  data2 = navProperty2


  scroll: boolean = false;
  current: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.current = this.router.url;

    const handlerScroll = () => {
      this.scroll = window.scrollY > 50;
    };

    const handleResize = () => {
      this.windowWidth = window.innerWidth;
    };
    window.addEventListener('scroll', handlerScroll);
    window.addEventListener('resize', handleResize);

  }

  handleMouseEnter(menu: string, submenu?: string): void {
    if (!this.activeMenu[menu]) this.activeMenu[menu] = {};
    this.activeMenu[menu][submenu || 'main'] = true;
  }

  handleMouseLeave(menu: string, submenu?: string): void {
    if (this.activeMenu[menu]) this.activeMenu[menu][submenu || 'main'] = false;
  }
}
