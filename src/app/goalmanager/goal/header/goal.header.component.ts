import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'goal-header',
    templateUrl: 'goal.header.component.html',
    styleUrls: ['goal.header.component.css']
})

export class GoalHeaderComponent {
    @Input ('title') title: string;
}