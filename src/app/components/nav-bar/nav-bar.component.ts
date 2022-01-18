import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  icons: any[] = [
    {
      title: 'Home',
      tooltip: 'View dashboard',
      iconRef: 'home',
      url: '/',
    },
    {
      title: 'Apps',
      tooltip: 'Browse app library',
      iconRef: 'dashboard',
      url: '/apps',
    },
    {
      title: 'Search',
      tooltip: 'Browse the entire app',
      iconRef: 'search',
      url: '/browse',
    },
    {
      title: 'Settings',
      tooltip: 'Modify app settings',
      iconRef: 'settings',
      url: '/settings',
    },
    {
      title: 'Profile',
      tooltip: 'Manage your account',
      iconRef: 'person',
      url: '/profile',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
