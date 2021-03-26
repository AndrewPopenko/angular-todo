import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];
  dataSource: MatTableDataSource<Task>;
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];

  constructor(private dataHandler: DataHandlerService) {
    this.tasks = [];
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe( tasks => this.tasks = tasks );
    // this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task): string {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
