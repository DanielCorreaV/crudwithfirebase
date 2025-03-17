import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { IonicModule } from '@ionic/angular';
import { TaskPopoverComponent } from './components/task-popover/task-popover.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink } from '@angular/router';
import { TasksViewPage } from './pages/tasks-view/tasks-view.page';
import { TasksHomePage } from './pages/tasks-home/tasks-home.page';
import { TaskRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [TaskItemComponent, TaskPopoverComponent, TaskFormComponent, TasksViewPage, TasksHomePage],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    RouterLink,
    TaskRoutingModule
  ],
  exports:[TaskItemComponent, TaskPopoverComponent, TaskFormComponent]
})
export class TaskModule { }
