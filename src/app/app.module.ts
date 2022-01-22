import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

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
import { LoginComponent } from './pages/profile/login/login.component';
import { CreateComponent } from './pages/profile/create/create.component';
import { ElInputComponent } from './components/elements/el-input/el-input.component';
import { ElButtonComponent } from './components/elements/el-button/el-button.component';

const firebaseConfig = {
  apiKey: "AIzaSyB9R3fyf-3dJ0wjDlD0OWU6jVoF5agskx4",
  authDomain: "voidpath-com.firebaseapp.com",
  projectId: "voidpath-com",
  storageBucket: "voidpath-com.appspot.com",
  messagingSenderId: "336870652680",
  appId: "1:336870652680:web:cb80e8a4abac2db485cabd",
  measurementId: "G-VJ6VBXQ04T"
}

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
    Error404Component,
    LoginComponent,
    CreateComponent,
    ElInputComponent,
    ElButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
