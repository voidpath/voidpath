import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-el-button',
  templateUrl: './el-button.component.html',
  styleUrls: ['./el-button.component.scss']
})
export class ElButtonComponent implements OnInit {

  @Input() useIcon: boolean = false;
  @Input() iconName: string = 'star';
  @Input() iconPosition: string = 'left';
  @Input() value: string = 'More';

  constructor() { }

  ngOnInit(): void {
  }

}
