import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './services/dark-mode/dark-mode.service';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { MenuItem, routes } from 'src/app/app-routing.module';
import { DarkModeComponent } from './services/dark-mode/dark-mode-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends DarkModeComponent implements OnInit {
  readonly faBars = faBars;

  menuActive: boolean = false;

  /**
   * @param darkModeService dark mode state is stored in localStorage
   */
  constructor(
    private darkModeService: DarkModeService,
    private router: Router
  ) {
    super(darkModeService);
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  toggleDarkMode() {
    if (this.darkModeService.isDarkModeEnabled())
      this.darkModeService.disbaleDarkMode();
    else this.darkModeService.enableDarkMode();
  }
  getDarkModeIndicator() {
    return this.darkMode ? faMoon : faSun;
  }

  get pageTitle(): string {
    return (
      routes.find((route: MenuItem) =>
        this.router.isActive(`/${route.path}`, {
          paths: 'exact',
          queryParams: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
        })
      )?.name || ''
    );
  }
}
