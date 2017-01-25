import { Component, Input, OnChanges } from '@angular/core';
import { Goal } from './goal.model';
import { Task } from './../../tasks/task/task.model';
import { TaskCollection } from './../../tasks/task/task.collection.model';

@Component({
    moduleId: module.id,
    selector: 'goal',
    templateUrl: './goal.component.html',
    styleUrls: ['goal.component.css']
})

export class GoalComponent implements OnChanges {
    @Input ('title') title: string;
    @Input ('goalItem') goalItem: Goal;

    private completedTasks:TaskCollection;
    private inCompletedTasks:TaskCollection;

    private reComputeTasks() {
        if (this.goalItem) {
            this.completedTasks = this.goalItem.getCompletedTasks();
            this.inCompletedTasks = this.goalItem.getInCompletedTasks();
        }
    }

    itemClicked(event:any, taskItem:Task) {
        //event.stopPropagation();
        taskItem.completed = event.checked;
        this.reComputeTasks();
        
    }

    ngOnChanges() {
        this.reComputeTasks();
    }

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