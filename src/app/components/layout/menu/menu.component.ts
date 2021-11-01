import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuItem, routes } from 'src/app/app-routing.module';
import { DarkModeComponent } from 'src/app/services/dark-mode/dark-mode-component';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent extends DarkModeComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<void>();

  menuItems: MenuItem[] = routes;
  activePage: string = '';

  constructor(
    private darkModeService: DarkModeService,
    private router: Router
  ) {
    super(darkModeService);
  }

  ngOnInit(): void {}

  isActive(menuItem: MenuItem): boolean {
    return this.router.isActive(`/${menuItem.path}`, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  navigateToMenuItem(menuItem: MenuItem) {
    this.router.navigateByUrl(`/${menuItem.path}`);
    this.activeChange.emit();
  }
}
