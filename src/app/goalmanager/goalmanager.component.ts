import { Component, OnInit, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { GOALS } from './goals.mock';
import { Goal } from './goal/goal.model';
import { GoalCollection } from './goal/goal.collection.model';
import { GoalService } from './goal/goal.service';
import { TaskService } from './../tasks/task/task.service';
import { Task } from './../tasks/task/task.model'; 

@Component ({
    moduleId: module.id,
    selector: 'goal-manager',
    templateUrl: 'goalmanager.component.html',
    styleUrls: ['goalmanager.component.css']
})

export class GoalManagerComponent implements OnInit {

    private _listGoals: GoalCollection;
    

    constructor(private goalService:GoalService, private taskService:TaskService) {
        //this._listGoals = GOALS;
        this._listGoals = new GoalCollection();
    }

    getTasks(goals:GoalCollection) {
        this._listGoals = goals
        for (let i=0; i<goals.length; i++) {
            let goal:Goal = goals[i];
            this.taskService.getTasks(goal.id).then(tasks => goal.tasks = tasks);
        }
    }

    getGoals() {
        this.goalService.getGoals().then(goals => this.getTasks(goals));
    }

    ngOnInit(): void {
        this.getGoals();
    }

    addGoal(event:any) {
        let src:any = event.target;
        let goalName:string = src.value;

        goalName = goalName ? goalName : '';
        goalName = goalName.trim();

        if (goalName.length > 0) {
        
            let newGoal = new Goal({title: goalName});
            event.goal = newGoal;
            this.goalTappedEmitter.emit(event);
            this._listGoals.push(newGoal);
        }
        
        src.value = "";
    }

}