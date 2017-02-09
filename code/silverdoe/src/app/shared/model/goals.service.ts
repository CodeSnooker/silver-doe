import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Goal, GoalInterface } from './goal';
import { Task, TaskInterface } from './task';
import { TasksService } from './tasks.service';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';


@Injectable()
export class GoalsService {

  private _goals$: FirebaseListObservable<GoalInterface[]>;

  constructor(private db: AngularFireDatabase, private tasksService:TasksService) {
    const path = `/goals`;
    this._goals$ = db.list(path);
  }

  findAllGoals(): Observable<GoalInterface[]> {
    return this.db.list('goals', {
      query: {
        orderByChild: 'priority'
      }
    }).map(Goal.fromJsonArray);
  }

  getTasksForGoal(): Observable<TaskInterface[]> {
    return null;
  }

  createNewGoal(title: string) {
    return this._goals$.push(new Goal(title));
  }

  removeGoal(goal: Goal): firebase.Promise<any> {
    return this._goals$.remove(goal.$key);
  }

  updateGoal(goal: GoalInterface, changes: any): firebase.Promise<any> {
    return this._goals$.update(goal.$key, changes);
  }

  findTasksForGoal(goal:Goal):Observable<TaskInterface[]>{
    return this.tasksService.getTasksForGoal(goal.$key);
  }

}