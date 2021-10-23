import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { MicrocontrollerService } from 'src/app/services/microcontroller/microcontroller.service';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faLightbulb = faLightbulb;
  // TODO: Change to get the color from the http service from the microcontroller
  color: Observable<Color>;
  formInvalid: boolean = false;

  addressFC = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}'),
  ]);

  constructor(
    private localStorage: LocalStorageService,
    private microcontroller: MicrocontrollerService
  ) {
    this.color = this.microcontroller.color;
  }

  ngOnInit(): void {
    this.addressFC.setValue(this.localStorage.getItem('address') || '');
  }
  /**
   * Called, when the user clicks the Connect button.
   */
  onSubmit() {
    if (this.addressFC.invalid) {
      this.formInvalid = true;
      return;
    }
    this.formInvalid = false;
    //TODO: handle connection
    this.localStorage.setItem('address', this.addressFC.value);
  }

  // !Not used in the final version
  randomColor() {
    this.microcontroller.setColor(
      new Color(
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
      )
    );
  }

  get lightbulbColor(): Observable<string> {
    return this.color.pipe(
      map((color) => color.css),
      tap(console.log)
    );
  }
}
