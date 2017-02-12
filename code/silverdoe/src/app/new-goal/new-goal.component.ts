import { Component, OnInit } from '@angular/core';
import { GoalsService } from './../shared/model/goals.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent implements OnInit {

  constructor(private goalsService:GoalsService) { }

  ngOnInit() {
  }

  onAddGoalEvent(event: any) {
        let src: any = event.target;
        let goalName: string = src.value;

        goalName = goalName ? goalName : '';
        goalName = goalName.trim();

        if (goalName.length > 0) {
            this.goalsService.createNewGoal(goalName);
        }

        src.value = "";
    }

}
