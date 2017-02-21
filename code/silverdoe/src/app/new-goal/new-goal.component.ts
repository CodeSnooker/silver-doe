import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoalsService } from './../shared/model/goals.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent implements OnInit {

    @Output('onAddingNewGoal') onAddingNewGoalEmitter: EventEmitter<string>; 

  constructor(private goalsService:GoalsService) { 
      this.onAddingNewGoalEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  onAddGoalEvent(event: any) {
        let src: any = event.target;
        let goalName: string = src.value;

        goalName = goalName ? goalName : '';
        goalName = goalName.trim();

        if (goalName.length > 0) {
            this.goalsService.createNewGoal(goalName).then(abc=>{
                let $key = abc.key;

                // We have got the key for the newly added goal. 
                // Here we can fire the event for editing this new goal.
                this.onAddingNewGoalEmitter.emit($key);
            });
            
        }

        src.value = "";
    }

}
