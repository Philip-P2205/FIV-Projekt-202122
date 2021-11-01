import { Component, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css'],
})
export class ColorSelectorComponent
  extends DarkModeComponent
  implements OnInit
{
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
