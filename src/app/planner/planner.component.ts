import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-planner',
    templateUrl: 'planner.component.html',
    styleUrls: ['planner.component.css']
})

export class PlannerComponent {
    
    static readonly millisecondsInADay:number = 86400000;
    today: Date;
    selectedDate: Date;

    constructor() {
        this.today = new Date();
        this.selectedDate = new Date();
    }

    onTimeSelectionEvent(interval: number) {
        let newDate = this.selectedDate.getTime() + (interval * PlannerComponent.millisecondsInADay);
        this.selectedDate = new Date(newDate);
    }
 }