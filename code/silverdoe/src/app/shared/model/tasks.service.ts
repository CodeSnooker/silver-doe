import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Goal, GoalInterface } from './goal';
import { Task, TaskInterface } from './task';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';


@Injectable()
export class TasksService {

  private _tasks$: FirebaseListObservable<TaskInterface[]>;
  private _basePath: string = '/tasks';

  constructor(private db: AngularFireDatabase) {
    const path = `/tasks`;
    this._tasks$ = db.list(path);
  }

  getTasksForGoal(goalKey:string): Observable<TaskInterface[]> {
    return this.db.list(this._basePath, {
      query: {
        orderByChild: 'belongsTo',
        equalTo: goalKey
      }
    });
  }

  createNewTaskForGoal(title: string, goalKey: string) {
    return this._tasks$.push(new Task(title, goalKey));
  }

  removeTask(task: Task): firebase.Promise<any> {
    return this._tasks$.remove(task.$key);
  }

  updateTask(task: TaskInterface, changes: any): firebase.Promise<any> {
    return this._tasks$.update(task.$key, changes);
  }

}
