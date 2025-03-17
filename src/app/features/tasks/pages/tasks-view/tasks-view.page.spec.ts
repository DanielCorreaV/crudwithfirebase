import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksViewPage } from './tasks-view.page';

describe('TasksViewPage', () => {
  let component: TasksViewPage;
  let fixture: ComponentFixture<TasksViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
