import { Component, OnInit } from '@angular/core';
import { TaskCollection } from './../tasks/task/task.collection.model';
import { Task } from './../tasks/task/task.model';
import { TaskService } from './../tasks/task/task.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    moduleId: module.id,
    selector: 'sd-planner',
    templateUrl: 'planner.component.html',
    styleUrls: ['planner.component.css']
})

export class PlannerComponent implements OnInit {

    static readonly millisecondsInADay: number = 86400000;
    today: Date;
    selectedDate: Date;
    tasks: TaskCollection;


    constructor(private taskService: TaskService, private dragulaService: DragulaService) {
        this.today = new Date();
        this.selectedDate = new Date();
        this.tasks = new TaskCollection();
    }

    ngOnInit() {
        this.getTasks();

        // this.dragulaService.drop.subscribe((value: any) => {
        //     this.onDrop(value.slice(1));
        // });

        // this.dragulaService.cloned.subscribe((value: any) => {
        //     this.onCloned(value.slice(1));
        // });

        // this.dragulaService.dragend.subscribe((value: any) => {
        //     this.onDragEnd(value.slice(1));
        // });

        

    }

    private assignDate(task:Task) {
        task.dueDate = this.selectedDate;
        this.getTasks();
    }

    // private onDrop(args: any) {
    //     let [e, el] = args;
    //     // do something
    //     console.log('Args (3) => ', e.getAttribute('id'));

    //     let taskId:string = e.getAttribute('id');
    //     this.taskService.getTaskById(taskId)
    //                     .then(task => this.assignDate(task));

    //     e.parentNode.removeChild(e);
    //     //this.dragulaService.cancel();

    //     //e.setAttribute('id', 'clone_' + taskId);

    // }

    private onDragEnd(args: any) {
        console.log('#onDragEnd: ', args);
    }

    private onCloned(args: any) {
        console.log('#onCloned: ', args);
    }

    private onDrop(args: any) {
        console.log('#onDrop: ', args);
    }

    private onDropModel(args: any) {
        let [el, target, source] = args;
        // do something else
        console.log('Args => ', args);
    }

    private onRemoveModel(args: any) {
        let [el, source] = args;
        // do something else
        console.log('Args (2) => ', args);
    }

    assignTasks(tasks: TaskCollection) {
        this.tasks = tasks;
    }

    getTasks() {
        this.taskService.getTasksByDueDate(this.selectedDate)
            .then(tasks => this.assignTasks(tasks));
    }

    onTimeSelectionEvent(interval: number) {
        let newDate = this.selectedDate.getTime() + (interval * PlannerComponent.millisecondsInADay);
        this.selectedDate = new Date(newDate);
        this.getTasks();
    }

    onTapped(event: any) {
        event.stopPropagation();
    }
}