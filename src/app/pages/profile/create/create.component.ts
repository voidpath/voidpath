import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private pageService: PageService, public auth: AuthService) { }

  ngOnInit(): void {
    this.pageService.updatePage({
      title: 'Developer Profile',
      description: 'Create a Voidpath Developer Profile!',
      children: false,
    });
  }

}
