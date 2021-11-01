import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
import { debounceTime, filter } from 'rxjs/operators';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css'],
})
export class ColorSelectorComponent
  extends DarkModeComponent
  implements OnInit
{
  readonly faLightbulb = faLightbulb;
  colorFC: FormControl = new FormControl(Validators.required);
  color: string = this.darkModeService.ifDarkMode('#f3f4f6', '#111827');
  copyIndicatorVisible: boolean = false;

  constructor(
    private darkModeService: DarkModeService,
    private clipboard: ClipboardService
  ) {
    super(darkModeService);
  }

  ngOnInit(): void {
    this.darkModeService.valueChanges
      .pipe(filter(() => !this.colorFC.dirty))
      .subscribe(
        () =>
          (this.color = this.darkModeService.ifDarkMode('#f3f4f6', '#111827'))
      );
    this.colorFC.valueChanges.subscribe((value) => (this.color = value));
  }

  copyColor() {
    this.clipboard.copy(this.color);
    this.copyIndicatorVisible = true;
    setTimeout(() => (this.copyIndicatorVisible = false), 350);
  }
}
