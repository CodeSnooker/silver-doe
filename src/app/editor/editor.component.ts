import { Component, OnInit } from '@angular/core';
import { GoalService } from './../goalmanager/goal/goal.service';
import { TaskService } from './../tasks/task/task.service';
import { Task } from './../tasks/task/task.model';
import { Goal } from './../goalmanager/goal/goal.model';


@Component({
    moduleId: module.id,
    selector: 'editor-layout',
    templateUrl: 'editor.template.html',
    styleUrls: ['editor.styles.css']
})

export class EditorComponent implements OnInit { 

    private tasks:Task[];
    private completedTasks:Task[];
    private inCompletedTasks:Task[];

    private showCompetedTasks = false;

    constructor(private taskService:TaskService) {}

    itemClicked(event:any, taskItem: Task) {
        //console.log('Item clicked');
        //alert('Item clicked')

        console.log(event.checked);
        taskItem.completed = event.checked;

        this.buildTasks(this.tasks);
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed === true);
     } 

     getInCompletedTasks() {
        return this.tasks.filter(task => task.completed === false);
     }

     buildTasks(tasks:Task[]) {
         this.tasks = tasks; 
         this.completedTasks = this.getCompletedTasks();
         this.inCompletedTasks = this.getInCompletedTasks();
     }

    ngOnInit() {
        this.getTasks()
    }

    getTasks() {
        this.taskService.getTasks('goal1')
            .then(tasks => this.buildTasks(tasks));
    }

    onTapped(event: any) {
        console.log('Hide Class');
        event.stopPropagation();
    }

    onGoalEditorTapped(event: any) {
        event.stopPropagation();
    }

    toggleShowCompletedTasks(event:any) {
        this.showCompetedTasks = !this.showCompetedTasks;

        var target = event.target;
        var buttons = target.getElementsByTagName('button');
        var targetButton: any, targetIcon: any;
        if (buttons) {
            targetButton = buttons[0];
            var icons = targetButton.getElementsByTagName('i');
            if (icons) {
                targetIcon = icons[0];
                if (this.showCompetedTasks) {
                    targetIcon.style.transform = 'rotateZ(0deg)';
                }
                else {
                    targetIcon.style.transform = 'rotateZ(-90deg)';
                    
                }
            }
        }

        
        console.log('Toggle Completed Tasks: ', event.target);
    }

    expandCompletedTasks() {

    }

    collapseCompletedTasks() {

    }
}