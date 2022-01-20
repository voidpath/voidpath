import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppsComponent } from './pages/apps/apps.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { HostingComponent } from './pages/apps/hosting/hosting.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
    { path: 'apps/web-hosting', component: HostingComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },

  // { path: '**', redirectTo: '/' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
