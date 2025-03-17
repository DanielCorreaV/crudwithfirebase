import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TaskPopoverComponent } from '../task-popover/task-popover.component';
import { Task } from 'src/app/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskItemComponent implements OnInit {
  constructor(
    private popoverctrl: PopoverController,
    private taskService: TaskService
  ) {}

  @Output() isStateChanged = new EventEmitter<boolean>();

  ngOnInit() {}

  @Input() task: Task= {
    title: '',
    description: '',
    date: new Date(),
    done: false
  };

  async openPopover(ev: Event) {
    const popover = await this.popoverctrl.create({
      component: TaskPopoverComponent,
      event: ev,
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data?.dismissPopover) {
      popover.dismiss();
    }
  }

  changeTaskState(state: boolean){
    this.isStateChanged.emit(true);
    this.taskService.changeTaskState(this.task.id, state).then(()=>{
      this.task.done=state;
      
    })
  }
  
}

