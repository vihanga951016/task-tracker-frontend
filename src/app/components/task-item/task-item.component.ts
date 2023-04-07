import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task! : Task;
  @Output() deleteClick = new EventEmitter();
  @Output() compulsoryClick = new EventEmitter();
  showAddTask!: boolean;
  subscription!: Subscription;

  faTimes = faTimes;

  constructor(private uiService : UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  onDelete() {
    this.deleteClick.emit();
  }

  onCompulsory() {
    this.compulsoryClick.emit();
  }
}
