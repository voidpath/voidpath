import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { Error404Component } from './components/pages/error404/error404.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [

  { path: '', component: BodyComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },

  { path: '**', component: Error404Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
