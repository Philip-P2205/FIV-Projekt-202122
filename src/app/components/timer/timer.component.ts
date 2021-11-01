import { Component, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent extends DarkModeComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
