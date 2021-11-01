import { Component, OnInit } from '@angular/core';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-custom-effects',
  templateUrl: './custom-effects.component.html',
  styleUrls: ['./custom-effects.component.css'],
})
export class CustomEffectsComponent
  extends DarkModeComponent
  implements OnInit
{
  constructor(private darkModeService: DarkModeService) {
    super(darkModeService);
  }

  ngOnInit(): void {}
}
