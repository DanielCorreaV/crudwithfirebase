import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: false
})
export class TaskFormComponent {
  taskForm: FormGroup;

  @Output() taskCreated = new EventEmitter<Task>();
  close= output<any>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }

  closeForm(){
    this.close.emit(true);
  }
}
