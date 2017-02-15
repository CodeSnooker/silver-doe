import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Goal, GoalInterface } from './goal';
import { Task, TaskInterface } from './task';
import { TasksService } from './tasks.service';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';


@Injectable()
export class GoalsService {

  private _goals$: FirebaseListObservable<Array<GoalInterface>>;
  private _filteredGoals$: Observable<Array<GoalInterface>>;
  private _goalFilter$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _goalPath: string = '/goals';

  /**
   * @Constructor
   */
  constructor(private db: AngularFireDatabase, private tasksService: TasksService) {

    this.findAllGoals();
    this.setGoalFilter(false);
    this._filteredGoals$ = this._goalFilter$.switchMap(filter => this.getFilteredGoals());
  }


  /**
   * Fetches list of goals from the databases server and store is as local FirebaseListObservable object
   */
  private findAllGoals() {
    this._goals$ = this.db.list(this._goalPath, {
      query: {
        orderByChild: 'priority'
      }
    });
  }

  /**
   * Converts FirebaseListObservable object into Observable object and then applies archived filter to it.
   */
  private getFilteredGoals(): Observable<Array<GoalInterface>> {
    return this._goals$
      .map(Goal.fromJsonArray)
      .map(Goal.sortByPriorityAndThenDate)
      .map(goals => goals.filter(goal => goal.archived == this._goalFilter$.getValue()));
  }

  /**
   * Returns Goals (filtered => Goal is active/archived) as Observable object 
   */
  getGoals(archived: boolean): Observable<Array<GoalInterface>> {
    return this._filteredGoals$;
  }

  /**
   * Updates observable goal filter value
   */
  setGoalFilter(archived: boolean) {
    this._goalFilter$.next(archived);
  }

  /**
   * Creates new goal for the user and store it in database
   */
  createNewGoal(title: string) {
    return this._goals$.push(new Goal(title));
  }

  createClone(goal: GoalInterface): firebase.Promise<any> {
    return this._goals$.push(Goal.clone(goal));
  }

  /**
   * Removes given goal from the database
   */
  removeGoal(goal: Goal): firebase.Promise<any> {
    return this._goals$.remove(goal.$key);
  }

  /**
   * Updates the data for the given goal with mentioned changes and then store it database
   */
  updateGoal(goal: GoalInterface, changes: any): firebase.Promise<any> {
    return this._goals$.update(goal.$key, changes);
  }

  /**
   * Finds tasks for the given goal
   */
  findTasksForGoal(goal: Goal): Observable<TaskInterface[]> {
    return this.tasksService.getTasksForGoal(goal.$key);
  }

}
