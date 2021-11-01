import { DarkModeService } from './dark-mode.service';

export class DarkModeComponent {
  constructor(private _darkModeService: DarkModeService) {}

  get darkMode(): string {
    return this._darkModeService.darkModeText;
  }
}
