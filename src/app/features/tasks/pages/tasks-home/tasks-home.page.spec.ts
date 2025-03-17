import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksHomePage } from './tasks-home.page';

describe('TasksHomePage', () => {
  let component: TasksHomePage;
  let fixture: ComponentFixture<TasksHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
