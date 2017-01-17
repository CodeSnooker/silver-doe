import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-planner',
    templateUrl: 'planner.component.html',
    styleUrls: ['planner.component.css']
})

export class PlannerComponent {
    
    today: Date;
    selectedDate: Date;

    constructor() {
        this.today = new Date();
        this.selectedDate = new Date();
    }

    onTimeSelectionEvent(interval: number) {
        console.log("#Planner Root Component: ", interval);

        let newDate = this.selectedDate.getTime() + (interval * 86400000);
        this.selectedDate = new Date(newDate);

        console.log('New Date: ', this.today);

    }
 }