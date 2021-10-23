import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FIV-Project';

  /**
   * @param darkModeService dark mode state is stored in localStorage
   */
  constructor(private darkModeService: DarkModeService) {}

  get darkMode(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}
