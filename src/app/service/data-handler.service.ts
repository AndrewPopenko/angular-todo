import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task[]>();

  constructor() { }

  getCategories(): Category[] {
    return TestData.categories;
  }

  fillTasks() {
    this.taskSubject.next( TestData.tasks );
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  fillTasksByCategory(category: Category) {  
    const tasks = TestData.tasks.filter( item => item.category === category);
    this.taskSubject.next( tasks );
  }

  getTasksByCategory(category: Category): Category[] {
    const tasks = TestData.tasks.filter( item => item.category === category);
    console.log(tasks);
    return tasks;
  }
}
