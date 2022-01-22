import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private pageService: PageService, public auth: AuthService) { }

  ngOnInit(): void {
    this.pageService.updatePage({
      title: 'Developer Profile',
      description: 'Login to your Voidpath Developer Profile!',
      children: false,
    });
  }

}
