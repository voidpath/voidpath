import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {

  page: any;
  pageTitle!: string;

  constructor(private pageService: PageService) { }
  
  ngOnInit(): void {
    this.pageService.page$.subscribe(obj => this.page = obj);
  }

}
