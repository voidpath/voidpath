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
