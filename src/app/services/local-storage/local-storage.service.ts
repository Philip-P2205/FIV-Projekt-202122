import { Injectable } from '@angular/core';

/**
 * Wrapper for window.localStorage object. Exists just for easier use.
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }

  key(index: number): string | null {
    return window.localStorage.key(index);
  }

  get length(): number {
    return window.localStorage.length;
  }
}
