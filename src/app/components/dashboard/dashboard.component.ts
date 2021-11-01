import { Component, Input, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent extends DarkModeComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
