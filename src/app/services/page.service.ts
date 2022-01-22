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

  private authState = new BehaviorSubject<boolean>(false);
  authState$ = this.authState.asObservable();

  constructor(private titleService: Title) {
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  updatePage(obj: any) {
    this.page.next(obj);
    this.setTitle(obj.title);
  }

  updateAuthState(bool: boolean) {
    this.authState.next(bool);
  }

}
