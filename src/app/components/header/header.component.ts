import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title : string = "Task Tracker";

  faTimes = faTimes

  toggleAddTask(){
    console.log("toggled");
    
  }
}
