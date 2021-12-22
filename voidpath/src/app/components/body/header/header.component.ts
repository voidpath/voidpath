import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  getPageTitle(): string {
    const url: string = this.router.url;
    const urlSplit = url.split('/');
    let pageTitle: string = 'Voidpath';
    if (urlSplit[1] == '') {
      pageTitle = 'Home';
    } else if (urlSplit[1] == 'search') {
      pageTitle = 'Search';
    } else if (urlSplit[1] == 'toolkit') {
      pageTitle = 'Toolkit';
    } else if (urlSplit[1] == 'account') {
      pageTitle = 'Account';
    } else {
      pageTitle = urlSplit[1]
    }
    return pageTitle;
  }

}
