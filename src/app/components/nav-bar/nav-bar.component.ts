import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  icons: any[] = [
    {
      position: 0,
      title: 'Home',
      tooltip: 'View dashboard',
      iconRef: 'home',
      url: '/',
    },
    {
      position: 1,
      title: 'Apps',
      tooltip: 'Browse app library',
      iconRef: 'dashboard',
      url: '/apps',
    },
    {
      position: 2,
      title: 'Search',
      tooltip: 'Browse the entire app',
      iconRef: 'search',
      url: '/browse',
    },
    {
      position: 3,
      title: 'Settings',
      tooltip: 'Modify app settings',
      iconRef: 'settings',
      url: '/settings',
    },
    {
      position: 4,
      title: 'Profile',
      tooltip: 'Manage your account',
      iconRef: 'person',
      url: '/profile',
    },
  ];

  page: any;

  constructor() { }

  ngOnInit(): void {
  }


}
