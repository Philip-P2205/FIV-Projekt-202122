import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  active: boolean = true;

  menuItems = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Color Selector',
      link: '/color-selector',
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.active = !this.active;
  }
}
