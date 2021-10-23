import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Color } from 'src/app/models/color.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

/**
 * This service is used to 'talk' to the microcontroller over wifi.
 * It encodes the data to send and decodes the data it receives.
 */
@Injectable({
  providedIn: 'root',
})
export class MicrocontrollerService {
  // !Not to be used
  private connected: boolean;
  private colorSubject: BehaviorSubject<Color>;

  constructor(private localStorage: LocalStorageService) {
    this.connected = this.checkConnection();
    this.localStorage.setItem('color', JSON.stringify(new Color(0, 200, 255)));
    this.colorSubject = new BehaviorSubject<Color>(
      JSON.parse(this.localStorage.getItem('color') || '')
    );
  }

  /**
   * Checks if the microcontroller is reachable under the specified ip-address.
   */
  checkConnection(): boolean {
    this.localStorage.getItem('address');
    return (this.connected = true);
  }

  /**
   * Gets the color of the light controlled by the microcontroller and returns it.
   * @returns The current color the the light.
   * TODO: Get the current color from the microcontroller
   */
  getCurrentColor(): Observable<Color> {
    // Before anything is done, the microcontroller needs to be connected.
    if (!this.connected) throw new Error('Microcontroller is not connected!');
    // TODO: Ask the microcontroller for the current color.
    return this.color;
  }

  /**
   * Sets the color of the light controlled by the microcontroller.
   * @param color The color to set the light to.
   * TODO: Set the color of the light to the specified color
   */
  setColor(color: Color): void {
    // Before anything is done, the microcontroller needs to be connected.
    if (!this.connected) throw new Error('Microcontroller is not connected!');
    // TODO: Tell the microcontroller the new color.
    this.colorSubject.next(color);
  }

  get color(): Observable<Color> {
    return this.colorSubject.asObservable();
  }
}
