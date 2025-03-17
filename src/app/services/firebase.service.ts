import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getTasks() {
    return this.db.collection('Tasks').valueChanges();
  }

  addTask(task: Task) {
    return this.db.collection('Tasks').add(task);
  }
}
