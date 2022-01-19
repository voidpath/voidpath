import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private page = new BehaviorSubject<any>({
    title: 'Voidpath',
    description: 'The best developer resources on the internet!',
    children: false,
  });
  page$ = this.page.asObservable();

  constructor(private titleService: Title) {
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  updateNavPage(pagePosition: number) {

    let obj = {
      title: 'Voidpath',
      description: 'The best developer resources on the internet!',
      children: false,
    }

    if (pagePosition == 0) {
      obj = {
        title: 'Home',
        description: 'The best developer resources on the internet!',
        children: false,
      }
    } else if (pagePosition == 1) {
      obj = {
        title: 'Apps',
        description: 'Get access to our free-to-use Apps and Services exclusive to Voidpath!',
        children: true,
      }
    } else if (pagePosition == 2) {
      obj = {
        title: 'Search',
        description: 'Browse through our collection of free Apps and Services!',
        children: false,
      }
    } else if (pagePosition == 3) {
      obj = {
        title: 'Settings',
        description: 'Modify the app\'s appearance and behaviour!',
        children: false,
      }
    } else if (pagePosition == 4) {
      obj = {
        title: 'Profile',
        description: 'Manage your Voidpath Developer Profile!',
        children: false,
      }
    }

    this.page.next(obj);
    this.setTitle(obj.title + ' -> Voidpath');
  }

  updatePage(obj: any) {
    this.page.next(obj);
    this.setTitle(obj.title);
  }

}
