import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model'
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.page.html',
  styleUrls: ['./tasks-view.page.scss'],
  standalone: false
})
export class TasksViewPage implements OnInit {
  isEditing: boolean = false;
  taskForm: FormGroup;
  task: Task = {
    id: "",
    title: "",
    description: "",
    date: new Date(),
    done: false
  };
  TaskID: string = "";
  isLoaded: boolean = false; 
  currentState: string= "false";

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private actRoute: ActivatedRoute,
    private route: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      state: ['', Validators.required], 
      description: ['', [Validators.required]]
    });

    this.TaskID = this.actRoute.snapshot.paramMap.get('id') || '';
    if(this.actRoute.snapshot.paramMap.get('param')=="editable"){
      this.isEditing=true;
    }

  }

  ngOnInit(): void {
    if (this.TaskID) {
      this.taskService.getTaskById(this.TaskID).subscribe(task => {
        this.task = {
          ...task,
          date: task.date instanceof Timestamp ? task.date.toDate() : task.date
        };
        this.taskForm.patchValue({
          title: this.task.title,
          state: this.task.done,
          description: this.task.description
        });
        this.isLoaded = true;
        this.currentState=  task.done.toString();

        if(this.actRoute.snapshot.paramMap.get('param')=="delete"){
          this.deleteTask();
        }
      });
    }	
  }

  submitForm() {
    if (!this.isLoaded) {
      console.log("Esperando datos...");
      return;
    }

    if (this.taskForm.valid) {
      const updatedTask = {
        ...this.task,
        ...this.taskForm.value,
        done: this.taskForm.value.state 
      };

      this.taskService.updateTask(this.TaskID, updatedTask).then(() => {
        console.log('Task updated successfully!');
        this.isEditing = false;
      }).catch(error => {
        console.error('Error updating task:', error);
      });
    } else {
      console.log('Invalid form');
      this.isEditing=true;
    }
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;

    if (!this.isEditing) {
      this.submitForm(); 
    }
  }

  deleteTask() {
    if (this.task.id) {
      this.taskService.deleteTask(this.task.id)
        .then(() => {
          console.log('Task deleted successfully!');
          this.route.navigate(['/tasks/tasks-home']); 
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
    } else {
      console.log('Invalid task ID');
    }
  }
  
}
