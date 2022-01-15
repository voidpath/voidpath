import { Component, OnInit } from '@angular/core';

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
      title: 'Account',
      tooltip: 'Manage your account',
      iconRef: 'person',
      url: '/account',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
