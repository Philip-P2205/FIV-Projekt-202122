import { Component, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent extends DarkModeComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
