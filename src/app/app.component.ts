import { Component } from '@angular/core';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-client';

  authState: boolean = false;

  constructor(private pageService: PageService) { }
  
  ngOnInit(): void {
    if (localStorage['theme'] === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newTheme = e.matches ? "dark" : "light";
        localStorage['theme'] = newTheme;
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (newTheme === 'light') {
          document.documentElement.classList.remove('dark');
        }
      });
    }

    this.pageService.authState$.subscribe(obj => this.authState = obj);
  }
  setSystemMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage['theme'] = 'system';
  }
  setDarkMode() {
    localStorage['theme'] = 'dark';
    document.documentElement.classList.add('dark');
  }
  setLightMode() {
    localStorage['theme'] = 'light';
    document.documentElement.classList.remove('dark');
  }

}
