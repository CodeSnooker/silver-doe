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
    private lamda = 'material-icons fadded anim zeroDeg';

    constructor(private taskService:TaskService) {}

    itemClicked(event:any, taskItem: Task) {
        
        taskItem.completed = event.checked;
        this.buildTasks(this.tasks);
    }

    onHover(event: any, index: number, completed:boolean) {
        
        let type:string = 'pending_';

        if (completed) {
            type = 'completed_';
        }else {
            var moveElement = document.getElementById(type + 'move_' +  index);
            moveElement.style.opacity = '1.0';
        }

        var deleteElement = document.getElementById(type + 'delete_' +  index);        
        deleteElement.style.opacity = '1.0';
    }

    onMouseOut(event: any, index: number, completed:boolean) {
        let type:string = 'pending_';

        if (completed) {
            type = 'completed_';
        }
        else {
            var moveElement = document.getElementById(type + 'move_' +  index);
            moveElement.style.opacity = '0.0';
        }

        var deleteElement = document.getElementById(type + 'delete_' +  index);
        deleteElement.style.opacity = '0.0';
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
        this.lamda  = 'material-icons fadded anim zeroDeg'

        if (this.showCompetedTasks) {
            this.lamda  = 'material-icons fadded anim ninetyDeg'
        }
    }

    expandCompletedTasks() {

    }

    collapseCompletedTasks() {

    }
}