import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/body/header/header.component';
import { DesktopNavComponent } from './components/body/desktop-nav/desktop-nav.component';
import { MobileNavComponent } from './components/body/mobile-nav/mobile-nav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AccountComponent } from './components/pages/account/account.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { ToolkitComponent } from './components/pages/toolkit/toolkit.component';
import { SearchComponent } from './components/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    DesktopNavComponent,
    MobileNavComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    ToolkitComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
