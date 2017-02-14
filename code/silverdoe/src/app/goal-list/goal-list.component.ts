import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { GoalsService } from './../shared/model/goals.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css'],
  viewProviders: [DragulaService]
})
export class GoalListComponent implements OnInit, OnChanges {

  @Input() goals: GoalInterface[] = [];

  private _goalsModel: GoalInterface[];
  

  /**
   * 
   */
  constructor(private dragulaService: DragulaService, private goalsService: GoalsService) { }


  /**
   * 
   */
  ngOnInit() {
    this.allowDragOnlyFromHeader();
    this.subscribeGoalDropEvent();
  }

  /**
   * 
   */
  private allowDragOnlyFromHeader() {
    this.dragulaService.setOptions('bag-of-goals', {
      moves: function (el, container, handle) {
        return handle.className === 'sd-goal-header';
      }
    });
  }

  /**
   * 
   */
  private subscribeGoalDropEvent() {
    this.dragulaService.drop.subscribe((value) => {
      setTimeout(() => {
        this.updatePriorityForGoals();
      }, 10);
    });
  }

  /**
   * 
   */
  private updatePriorityForGoals() {
    this.goals.forEach((goal, index) => {
      if (goal.priority !== index) {
        this.updateGoal(goal, index);
      }
    })
  }

  /**
   * 
   */
  private updateGoal(goal: Goal, index: number): any {
    this.goalsService.updateGoal(goal, {
      priority: index
    }).then(results => {
    });
  }

  // getUnArchived(goal: GoalInterface) {
  //   return !goal.archived;
  // }

  // getArchived(goal: GoalInterface) {
  //   return goal.archived;
  // }

  ngOnChanges() {
    //console.log('#on Changes called: ', this.goals ? this.goals.length : 'zero');
    // if (this.goals) {
    //   if (this.currentFilter != this.onlyActiveFilter) {
    //     this.goals = this.goals.filter(this.getUnArchived);
    //   }
    // }


  }

}
