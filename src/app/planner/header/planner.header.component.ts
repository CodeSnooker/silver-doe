import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-planner-header',
    styleUrls: ['planner.header.component.css'],
    templateUrl: 'planner.header.component.html'
})


export class PlannerHeaderComponent {

    @Input('today') today: Date;
    @Input('selectedDate') selectedDate: Date;
}