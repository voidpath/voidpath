import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.updatePage({
      title: 'Apps',
      description: 'Get access to our free-to-use Apps and Services exclusive to Voidpath!',
      nested: true,
    });
  }



}
