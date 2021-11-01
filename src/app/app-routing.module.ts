import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faChartBar,
  faCog,
  faEdit,
  faInfoCircle,
  faSlidersH,
  faStopwatch,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AboutComponent } from './components/about/about.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { CustomEffectsComponent } from './components/custom-effects/custom-effects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EffectsComponent } from './components/effects/effects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TimerComponent } from './components/timer/timer.component';

export declare type MenuItem = Route & {
  name: string;
  icon: IconDefinition;
};

export const routes: MenuItem[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    component: DashboardComponent,
    icon: faTachometerAlt,
  },
  {
    name: 'Color Selector',
    path: 'color-selector',
    component: ColorSelectorComponent,
    icon: faSlidersH,
  },
  {
    name: 'Timer',
    path: 'timer',
    component: TimerComponent,
    icon: faStopwatch,
  },
  {
    name: 'Effects',
    path: 'effects',
    component: EffectsComponent,
    icon: faChartBar,
  },
  {
    name: 'Custom Effects',
    path: 'effects-custom',
    component: CustomEffectsComponent,
    icon: faEdit,
  },
  {
    name: 'Settings',
    path: 'settings',
    component: SettingsComponent,
    icon: faCog,
  },
  {
    name: 'About',
    path: 'about',
    component: AboutComponent,
    icon: faInfoCircle,
  },
];

const _routes: Routes = [
  ...routes,
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
