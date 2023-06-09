import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>
      this.tasks = tasks
    )
  }

  addTask(task: Task) {
    this.taskService.addNewTask(task).subscribe(() =>
      this.taskService.getTasks().subscribe((tasks) =>
        this.tasks = tasks
      )
    )
  }

  deleteTask(id: number) {
    console.log("delete", id);
    this.taskService.deleteTask(id).subscribe(() =>
      this.taskService.getTasks().subscribe((tasks) =>
        this.tasks = tasks
      )
    );
  }

  compulsoryTask(id: number) {
    console.log("compulsory", id);
    this.taskService.compulsoryTask(id).subscribe(() =>
      this.taskService.getTasks().subscribe((tasks) =>
        this.tasks = tasks
      )
    )
  }

}
