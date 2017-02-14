import { Component, OnInit, Input, Output } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';
import { GoalsService } from './../shared/model/goals.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  @Input() goal: Goal;

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
  }

  onDeleteEvent() {
    this.goalsService.removeGoal(this.goal);
  }

  onToggleArchiveEvent() {
    this.goalsService.updateGoal(this.goal, {archived: !this.goal.archived});
  }


}
