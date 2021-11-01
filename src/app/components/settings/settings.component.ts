import { Component, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent extends DarkModeComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
