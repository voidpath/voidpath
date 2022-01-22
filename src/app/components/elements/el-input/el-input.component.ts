import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-el-input',
  templateUrl: './el-input.component.html',
  styleUrls: ['./el-input.component.scss']
})
export class ElInputComponent implements OnInit {

  @Input() inputName: string = 'input-00';
  @Input() inputType: string = 'text';
  @Input() label: string = 'Enter value';
  @Input() value: string = '';
  @Input() readonly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
