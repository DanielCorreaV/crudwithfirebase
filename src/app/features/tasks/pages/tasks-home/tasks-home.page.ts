import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-home',
  templateUrl: './tasks-home.page.html',
  styleUrls: ['./tasks-home.page.scss'],
  standalone:false
})
export class TasksHomePage implements OnInit {
  
  isFormOpen: boolean= false;
  tasks$: Observable<Task[]>;
  showInsertnotification: boolean= false;
  showChangeNotification: boolean = false;
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.filterbyStatus(2);
  
  }

  
  openForm(){
    this.isFormOpen= true;
    console.log(this.isFormOpen);
  }
  closeForm(){
    this.isFormOpen= false;
    console.log(this.isFormOpen);
  }
  
  addTask(task: any) {
    this.closeForm();
    this.taskService.addTask(task);
    this.showInsertnotification=true; 
    
  }

  filterbyStatus(status: number){
    if(status==1){
      this.tasks$ = this.taskService.getTasks();
    }
    else if(status==2){
      this.tasks$ = this.taskService.getTasksCompleted(false);
    }
    else if(status==3){
      this.tasks$ = this.taskService.getTasksCompleted(true);
    }

  }

  openChangeNotification(){
    this.showChangeNotification=true;
    console.log(this.showChangeNotification);
  }


}
