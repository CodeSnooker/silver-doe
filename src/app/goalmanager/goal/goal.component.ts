import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'goal',
    templateUrl: './goal.component.html',
    styleUrls: ['goal.component.css']
})

export class GoalComponent {
    @Input ('title') title: string;
}