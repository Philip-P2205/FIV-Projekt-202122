import { Injectable } from '@angular/core';
import { Color } from 'src/app/models/color.model';

/**
 * This service is used to 'talk' to the microcontroller over wifi.
 * It encodes the data to send and decodes the data it receives.
 */
@Injectable({
  providedIn: 'root',
})
export class MicrocontrollerService {
  // !Not to be used
  color: Color = new Color(0, 200, 255);
  constructor() {}

  /**
   * Gets the color of the light controlled by the microcontroller and returns it.
   * @returns The current color the the light.
   * TODO: Get the current color from the microcontroller
   */
  getCurrentColor(): Color {
    return this.color;
  }

  /**
   * Sets the color of the light controlled by the microcontroller.
   * @param color The color to set the light to.
   * TODO: Set the color of the light to the specified color
   */
  setColor(color: Color): void {
    this.color = color;
  }
}
