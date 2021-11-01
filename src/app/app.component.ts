import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FIV-Project';
  menuActive: boolean = true;

  /**
   * @param darkModeService dark mode state is stored in localStorage
   */
  constructor(private darkModeService: DarkModeService) {}

  onMenuStateChange(state: boolean) {
    this.menuActive = state;
  }

  get darkMode(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}
