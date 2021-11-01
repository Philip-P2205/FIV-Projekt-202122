import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private _valueChanges: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isDarkModeEnabled());

  constructor(private localStorage: LocalStorageService) {}

  isDarkModeEnabled(): boolean {
    return this.localStorage.getItem(key) === 'true';
  }

  enableDarkMode(): void {
    this.localStorage.setItem(key, 'true');
    this._valueChanges.next(true);
  }

  disbaleDarkMode(): void {
    this.localStorage.setItem(key, 'false');
    this._valueChanges.next(false);
  }
  ifDarkMode<T>(tValue: T, fValue: T): T {
    if (this.isDarkModeEnabled()) return tValue;
    else return fValue;
  }

  get valueChanges(): Observable<boolean> {
    return this._valueChanges.asObservable();
  }

  get darkModeText(): string {
    return this.isDarkModeEnabled() ? 'dark' : '';
  }
}
