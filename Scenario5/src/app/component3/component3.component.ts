import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
    // decorator used to display the data from childEvent
    @Output() public childEvent= new EventEmitter();
    fireEvent()
    {
    this.childEvent.emit('This is Scenario5');
    }
  constructor() { }

  ngOnInit() {
  }

}
