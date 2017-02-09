import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Goal, GoalInterface } from './goal';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';


@Injectable()
export class GoalsService {

  visibleTasks$: FirebaseListObservable<GoalInterface[]>;
  private _goals$: FirebaseListObservable<GoalInterface[]>;

  constructor(private db: AngularFireDatabase) {
    const path = `/goals`;
    this._goals$ = db.list(path);
    this.visibleTasks$ = db.list(path);

  }

  findAllGoals(): Observable<GoalInterface[]> {
    return this.db.list('goals', {
      query: {
        orderByChild: 'priority'
      }
    }).map(Goal.fromJsonArray);
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

}
