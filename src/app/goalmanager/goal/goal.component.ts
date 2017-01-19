import { Component, Input } from '@angular/core';
import { Goal } from './goal.model';

@Component({
    moduleId: module.id,
    selector: 'goal',
    templateUrl: './goal.component.html',
    styleUrls: ['goal.component.css']
})

export class GoalComponent {
    @Input ('title') title: string;
    @Input ('goalItem') goalItem: Goal;

    onCopyEvent() {
        console.log('#Goal Compoent: copy');
    }

    onPrintEvent() {
        console.log("#Goal Component: print");
    }

    onDeleteEvent() {
        console.log("#Goal Component: delete");
    }

    onArchiveEvent(toArchive:boolean) {
        console.log("#Goal Component: archive = ", toArchive);
        this.goalItem.archived = !this.goalItem.archived;
    }
}