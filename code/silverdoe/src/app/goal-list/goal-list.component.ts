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
  private activeEditGoal: GoalInterface;
  private activeGoalDimensions: any;


  /**
   * @Constructor
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

  ngOnChanges() { }

  private editGoal($event: any, goal: GoalInterface) {

    let element: any = document.getElementById('goal_' + goal.$key);
    this.activeGoalDimensions = {
      left: element.offsetLeft,
      top: element.offsetTop
    };


    console.log('Edit Goal Called => ', element.offsetLeft, ', ', element.offsetTop);
    this.activeEditGoal = goal;
  }

  onCloseEditor() {
    console.log('Editor is closed now');
    setTimeout(()=>{
      console.log('Goal is now undefined');
      this.activeEditGoal = undefined;
    }, 300);
    
  }

}
