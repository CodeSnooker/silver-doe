import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Goal, GoalInterface } from './../shared/model/goal';
import { Task, TaskInterface } from './../shared/model/task';

import { GoalsService } from './../shared/model/goals.service';
import { TasksService } from './../shared/model/tasks.service';

import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' },
  viewProviders: [DragulaService]
})
export class HomeComponent implements OnInit {



  name: any;
  state: string = '';
  private _textToSearch: string = '';
  private _bagList = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.", style: "color: cyan; height: 456px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: orange; height: 156px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', style: "color: lime; height: 256px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: grey; height: 326px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: yellow; height: 199px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit.', style: "color: violet; height: 200px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: blue; height: 250px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: green; height: 350px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: brown; height: 456px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: white; height: 200px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: deepblue; height: 250px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: deepgreen; height: 256px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: deeporange; height: 156px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: smoke; height: 356px;" },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tincidunt mauris non hendrerit. Morbi fringilla vehicula lectus vitae molestie.', style: "color: pink; height: 456px;" },
  ]


  private _searchActive: boolean = false;
  private goals: Array<GoalInterface>;

  constructor(public af: AngularFire,
    private router: Router,
    private goalsService: GoalsService,
    private dragulaService: DragulaService,
    private tasksService: TasksService) {

    dragulaService.setOptions('bag-one', {

    });

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
        console.log(auth.auth.photoURL);
        goalsService.findAllGoals().subscribe(goals => {
          this.goals = [];
          for (let goal of goals) {
            
            this.goals.push(goal);
          }
          console.log("Goals: => ", this.goals);
        });
      }
    });

    // dragulaService.dragend.subscribe(() => {
    //   this.updatePriorityForGoals();
    // });

    // this.dragulaService.dropModel.subscribe((data: any) => {
    //   console.log('Data changed: ', data);
    // });

    dragulaService.drop.subscribe((value) => {
      setTimeout(() => {
        this.updatePriorityForGoals();
      }, 10);
    });

  }

  updatePriorityForGoals() {
    this.goals.forEach((goal, index) => {
      if (goal.priority !== index) {
        this.updateGoal(goal, index);
      }
    })
  }

  updateGoal(goal: Goal, index: number): any {
    this.goalsService.updateGoal(goal, {
      priority: index
    }).then(results => {
    });
  }

  addNewGoal() {
    this.goalsService.createNewGoal('Test Goal_' + Math.random());
  }

  removeGoal(goal: Goal) {
    console.log('Going to remove goal: ', goal);
    this.goalsService.removeGoal(goal);
  }

  addNewTask(goal: Goal) {
    this.tasksService.createNewTaskForGoal('Test Task_' + Math.random(), goal.$key);
  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
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

}
