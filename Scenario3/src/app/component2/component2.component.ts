import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']

})
export class Component2Component implements OnInit {
// Input decorator to print the data from parent
    @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
