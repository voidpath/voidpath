import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppsComponent } from './pages/apps/apps.component';
import { BrowseComponent } from './pages/browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountComponent,
    HomeComponent,
    SettingsComponent,
    AppsComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
