import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  // in angular, data transmission is two directional. its means, parent and child can communicate data for
  // both side.  

  // @Input()
  // from parent to child, use @Input decorator. so that parent can send data(props) to the child.
  // we can use it like this  : @Input() text! : string;
  // also it can use like this: @Input('text') textInChild! : string;
  @Input('text') textOfChild! : string;
  @Input() color! : string;

  // @Output()
  // from child to parent, use @Output decorator. so that child can send event to parent.
  // why events only? when we try to send data from parent to child, we have the child component selector in parent
  // therefore we can easily bind the data( <app-button text="Add" color="green"></app-button> ). but in child,
  // we don't have parent selector in child. so we can't send data in same way. but we can use events for that.
  // so if we want to send data to the parnt component, we should create an event. for that we should create an 
  // instance from the event emitter class.  
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }
}
