import { Component, Input, OnChanges, Output, EventEmitter, DoCheck } from '@angular/core';
import { Goal } from './goal.model';
import { Task } from './../../tasks/task/task.model';
import { TaskCollection } from './../../tasks/task/task.collection.model';
import { GoalService } from './goal.service'; 

@Component({
    moduleId: module.id,
    selector: 'goal',
    templateUrl: './goal.component.html',
    styleUrls: ['goal.component.css']
})

export class GoalComponent implements OnChanges, DoCheck {
    @Input ('title') title: string;
    @Input ('goalItem') goalItem: Goal;

    constructor(private goalService:GoalService) {

    }

    private completedTasks:TaskCollection;
    private inCompletedTasks:TaskCollection;

    private reComputeTasks() {
        if (this.goalItem) {
            this.completedTasks = this.goalItem.getCompletedTasks();
            this.inCompletedTasks = this.goalItem.getInCompletedTasks();
            this.goalItem.updateProgress();
        }
    }

    itemClicked(event:any, taskItem:Task) {
        //event.stopPropagation();
        //event.stopPropagation();
        taskItem.completed = event.checked;
        this.reComputeTasks();
        
    }

    ngOnChanges() {
        this.reComputeTasks();
    }

    ngDoCheck() {
        this.reComputeTasks();
    }

    onCopyEvent() {
        this.goalService.clone(this.goalItem);
    }

    onPrintEvent() {
        console.log("#Goal Component: print");
    }

    onDeleteEvent() {
        this.goalService.remove(this.goalItem);
        //console.log("#Goal Component: delete");
    }

    onArchiveEvent(toArchive:boolean) {
        console.log("#Goal Component: archive = ", toArchive);
        this.goalItem.archived = !this.goalItem.archived;
    }

    
}