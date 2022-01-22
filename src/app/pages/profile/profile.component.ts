import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private pageService: PageService, public auth: AuthService) { }

  ngOnInit(): void {
    this.pageService.updatePage({
      title: 'Profile',
      description: 'Manage your Voidpath Developer Profile!',
      children: false,
    });
  }

}
