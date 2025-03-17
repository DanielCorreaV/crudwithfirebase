import { NgModule } from '@angular/core';
import { TasksHomePage } from './pages/tasks-home/tasks-home.page';
import { RouterModule, Routes } from '@angular/router';
import { TasksViewPage } from './pages/tasks-view/tasks-view.page';

const routes: Routes = [
  {
    path: 'tasks-home',
    component: TasksHomePage
  },
  {
    path: 'tasks-view/:id',
    component: TasksViewPage
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
