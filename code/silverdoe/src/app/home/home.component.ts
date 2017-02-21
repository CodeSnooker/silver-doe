import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';


import { Goal, GoalInterface } from './../shared/model/goal';
import { Task, TaskInterface } from './../shared/model/task';

import { GoalsService } from './../shared/model/goals.service';
import { TasksService } from './../shared/model/tasks.service';

import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2';

import { GoalListComponent } from './../goal-list/goal-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class HomeComponent implements OnInit, AfterViewInit {

  name: any;

  private _textToSearch: string = '';
  private _searchActive: boolean = false;

  private testGoal: GoalInterface;

  private goals: Observable<GoalInterface[]>;
  private filteredGoals: GoalInterface[];
  private archivedFilterStatus: boolean = false;

  @ViewChild(GoalListComponent)
  private goalListComponent:GoalListComponent;

  /**
   * @Constructor
   */
  constructor(public af: AngularFire,
    private router: Router,
    private goalsService: GoalsService,
    private tasksService: TasksService) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
        this.goals = goalsService.getGoals(false);

        this.goals.subscribe(goals => {
          this.filteredGoals = [];
          for (let goal of goals) {
            this.filteredGoals.push(goal);
            //this.testGoal = goal;
          }
        })
      }
    });



  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.goalListComponent.
  }

  /**
   * Call this function when user press escape button or press on close search button
   */
  closeSearch() {
    this._searchActive = false;
    this._textToSearch = '';
  }

  openSearch() {
    this._searchActive = true;
  }

  handleEscape() {
    this.closeSearch();
  }

  /**
   * Performs search on the todo list when user press any key in search box
   */
  performSearch($event: Event) {

    this._searchActive = this._textToSearch.length > 0;

    if (this._textToSearch.length > 3) {
      // Perform the search
    }
  }

  onViewGoals($event: any) {
    console.log('On View Goals Pressed');
    this.goalsService.setGoalFilter(false);
  }

  onViewArchived($event: any) {
    console.log('On View Archived Pressed');
    this.goalsService.setGoalFilter(true);
  }

  onAddingNewGoal($key: any) {

    // Try to get the goal object
    let abc:Observable<Array<GoalInterface>> = this.goalsService.getGoal($key);
    let goalSubscription = abc.subscribe(goals=>{
      if (goals.length > 0) {
        this.goalListComponent.editGoal({}, goals[0]);
      }
      goalSubscription.unsubscribe();
    });

  }

}
