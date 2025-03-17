import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'task-popover',
  templateUrl: './task-popover.component.html',
  styleUrls: ['./task-popover.component.scss'],
  standalone: false
})
export class TaskPopoverComponent {
  constructor(private popoverCtrl: PopoverController) {}

  editTask() {
    console.log('Editar tarea');
    this.closePopover();
  }

  deleteTask() {
    console.log('Eliminar tarea');
    this.closePopover();
  }

  closePopover() {
    this.popoverCtrl.dismiss(); 
  }
}
