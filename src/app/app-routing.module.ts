import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppsComponent } from './pages/apps/apps.component';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
