import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
    public greeting;
//         Output decorator used to display the data from childEvent
 @Output() public childEvent= new EventEmitter();
    fireEvent()
        {
        this.childEvent.emit(this.greeting);
        }
  constructor() { }

  ngOnInit() {
  }

}
