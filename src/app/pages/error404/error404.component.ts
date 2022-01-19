import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.updatePage({
      title: '404 - Page Not Found',
      description: 'The best developer resources on the internet!',
      children: false,
    });
  }

}
