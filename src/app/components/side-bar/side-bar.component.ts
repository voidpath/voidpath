import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

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
