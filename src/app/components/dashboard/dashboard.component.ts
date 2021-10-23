import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Color } from '../../models/color.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faLightbulb = faLightbulb;
  // TODO: Change to get the color from the http service from the microcontroller
  color: Color = new Color(0, 200, 255);
  formInvalid: boolean = false;

  addressFC = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}'),
  ]);

  constructor(private localStorage: LocalStorageService) {}

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
}
