import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  title!: string;
  description!: string;
  compulsory: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;


  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  onSubmit() {
    if(!this.title) {
      alert('Please add a task')
      return;
    }

    const newTask = {
      title : this.title,
      description: this.description,
      compulsory: this.compulsory,
      addedDate: '',
      disabled: false,
      done: false
    }

    this.onAddTask.emit(newTask);

    this.showAddTask = !this.showAddTask

    this.title = '';
    this.description = '';
    this.compulsory = false;
  }
}
