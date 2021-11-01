import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ColorSelectorComponent } from './components/color-selector/color-selector.component';
import { EffectsComponent } from './components/effects/effects.component';
import { TimerComponent } from './components/timer/timer.component';
import { CustomEffectsComponent } from './components/custom-effects/custom-effects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ColorSelectorComponent,
    EffectsComponent,
    TimerComponent,
    CustomEffectsComponent,
    SettingsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
