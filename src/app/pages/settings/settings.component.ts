import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setSystemMode() {
    document.body.classList.add('transition-all');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage['theme'] = 'system';
    setTimeout(() => {
      document.body.classList.remove('transition-all');
    }, 250);
  }
  setDarkMode() {
    document.body.classList.add('transition-all');
    localStorage['theme'] = 'dark';
    document.documentElement.classList.add('dark');
    setTimeout(() => {
      document.body.classList.remove('transition-all');
    }, 250);
  }
  setLightMode() {
    document.body.classList.add('transition-all');
    localStorage['theme'] = 'light';
    document.documentElement.classList.remove('dark');
    setTimeout(() => {
      document.body.classList.remove('transition-all');
    }, 250);
  }

}
