import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'task-popover',
  templateUrl: './task-popover.component.html',
  styleUrls: ['./task-popover.component.scss'],
  standalone: false
})
export class TaskPopoverComponent implements OnInit {
  @Input() taskID: string = "";

  constructor(private popoverCtrl: PopoverController, private router: Router) {}

  ngOnInit() { 
    
  }

  TaskAdmAction(Action: string) {
    console.log('Editar tarea:', this.taskID);
    this.router.navigate([`tasks/tasks-view/${this.taskID}/${Action}`]); 
    this.closePopover();
  }

  editTask() {
    this.TaskAdmAction('editable');
  }

  deleteTask() {
    this.TaskAdmAction('delete');
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }
}

