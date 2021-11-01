import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faTachometerAlt,
  faSlidersH,
  faStopwatch,
  faChartBar,
  faEdit,
  faCog,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export const routes: Routes &
  {
    name: string;
    icon: IconDefinition;
  }[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    // component: DashboardComponent,
    icon: faTachometerAlt,
  },
  {
    name: 'Color Selector',
    path: 'color-selector',
    // component: ColorSelectorComponent,
    icon: faSlidersH,
  },
  {
    name: 'Timer',
    path: 'timer',
    // component: TimerComponent,
    icon: faStopwatch,
  },
  {
    name: 'Effects',
    path: 'effects',
    // component: EffectsComponent,
    icon: faChartBar,
  },
  {
    name: 'Custom Effects',
    path: 'effects-custom',
    // component: CustomEffectsComponent,
    icon: faEdit,
  },
  {
    name: 'Settings',
    path: 'settings',
    // component: SettingsComponent,
    icon: faCog,
  },
  {
    name: 'About',
    path: 'about',
    // component: AboutComponent,
    icon: faInfoCircle,
  },
];

const _routes: Routes = routes;

@NgModule({
  imports: [RouterModule.forRoot(_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
