import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppsComponent } from './pages/apps/apps.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { HostingComponent } from './pages/apps/hosting/hosting.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    HomeComponent,
    SettingsComponent,
    AppsComponent,
    BrowseComponent,
    PageNavComponent,
    HostingComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
