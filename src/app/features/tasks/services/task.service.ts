import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, collectionData, query, where, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksCollection = collection(this.firestore, 'Tasks');

  constructor(private firestore: Firestore) {}

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }
  // Obtener todas las tareas completadas
  getTasksCompleted(completed: boolean): Observable<Task[]> {
    const q = query(this.tasksCollection, where('done', '==', completed));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }
  // Obtener una tarea en base a su id
  getTaskById(id: string): Observable<Task> {
    const taskDocRef = doc(this.firestore, 'Tasks', id);
    return docData(taskDocRef, { idField: 'id' }) as Observable<Task>;
  }
  // Cambiar estado de las tareas (complete / in progress)
  changeTaskState(taskId: string, completed: boolean): Promise<void> {
    const taskRef = doc(this.firestore, `Tasks/${taskId}`); 
    return updateDoc(taskRef, { done: completed }); 
  }

  // Crear tarea
  addTask(task: Task) {
    task.done=false;
    task.date=new Date();
    return addDoc(this.tasksCollection, task);
  }

  // Actualizar tarea
  updateTask(id: string, task: Task): Promise<void> {
    const taskRef = doc(this.firestore, `Tasks/${id}`);
    return updateDoc(taskRef, { ...task });
  }

  // Eliminar tarea
  deleteTask(id: string) {
    const taskRef = doc(this.firestore, `Tasks/${id}`);
    return deleteDoc(taskRef);
  }
}