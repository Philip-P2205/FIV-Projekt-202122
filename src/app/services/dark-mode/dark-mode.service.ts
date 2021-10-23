import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

const key = 'darkMode';

/**
 * This service is responsible for managing the state of the dark mode.
 * It saves the current state of the dark mode in localStorage.
 */
@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  constructor(private localStorage: LocalStorageService) {}

  isDarkModeEnabled(): boolean {
    return this.localStorage.getItem(key) === 'true';
  }

  enableDarkMode(): void {
    this.localStorage.setItem(key, 'true');
  }

  disbaleDarkMode(): void {
    this.localStorage.setItem(key, 'false');
  }
}
