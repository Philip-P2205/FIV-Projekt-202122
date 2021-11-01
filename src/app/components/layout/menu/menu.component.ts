import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { MenuItem, routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<void>();

  menuItems: MenuItem[] = routes;
  activePage: string = '';

  constructor(private router: Router) {}

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

  ngOnInit(): void {}
}
