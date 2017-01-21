import { Component, OnInit } from '@angular/core';
import { GOALS } from './goals.mock';
import { Goal } from './goal/goal.model';
import { GoalService } from './goal/goal.service';

@Component ({
    moduleId: module.id,
    selector: 'goal-manager',
    templateUrl: 'goalmanager.component.html',
    styleUrls: ['goalmanager.component.css']
})

export class GoalManagerComponent implements OnInit {

    private _listGoals: Goal[];

    constructor(private goalService:GoalService) {
        //this._listGoals = GOALS;
        this._listGoals = [];
    }

    getGoals() {
        this.goalService.getGoals().then(goals => this._listGoals = goals);
    }

    ngOnInit(): void {
        this.getGoals();
    }
}