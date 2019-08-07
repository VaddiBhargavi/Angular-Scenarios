import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.sass']
})
export class Component2Component implements OnInit {
//     Output decorator used to display the data from childEvent
      @Output() public childEvent= new EventEmitter();
      fireEvent()
      {
      this.childEvent.emit('Hey Bhargavi');
      }
  constructor() { }

  ngOnInit() {
  }

}
