import { Component, OnInit, Input, Output } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';
import { GoalsService } from './../shared/model/goals.service';
import { Observable } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  @Input() goal: Goal;

  constructor(private goalsService: GoalsService, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  onDeleteEvent() {
    this.goalsService.removeGoal(this.goal);
  }

  onToggleArchiveEvent() {
    this.goalsService.updateGoal(this.goal, { archived: !this.goal.archived });
  }

  onCopyEvent() {
    this.goalsService.createClone(this.goal).then(() => {
      this.snackBar.open("Goal duplicated successfully", "Close", {
        duration: 5000,
      });
    });
  }

}
