import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {
  
  constructor(private router: Router) { }

  event$: any;
  pageTitle!: string;
  
  ngOnInit(): void {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if(event instanceof NavigationEnd) {

        const href = this.router.url;
        if (href == '/') {
          this.pageTitle = 'Voidpath';
        } else if (href == '/apps') {
          this.pageTitle = 'Apps';
        } else if (href == '/browse') {
          this.pageTitle = 'Browse';
        } else if (href == '/settings') {
          this.pageTitle = 'Settings';
        } else if (href == '/profile') {
          this.pageTitle = 'Profile';
        } else {
          this.pageTitle = 'Voidpath';
        }

      }
    });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

}
