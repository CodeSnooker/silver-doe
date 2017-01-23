import { Component, OnInit, OnChanges, EventEmitter, Input, Output, NgZone } from '@angular/core';
import { GoalService } from './../goalmanager/goal/goal.service';
import { TaskService } from './../tasks/task/task.service';
import { Task } from './../tasks/task/task.model';
import { TaskCollection } from './../tasks/task/task.collection.model';
import { Goal } from './../goalmanager/goal/goal.model';


@Component({
    moduleId: module.id,
    selector: 'editor-layout',
    templateUrl: 'editor.template.html',
    styleUrls: ['editor.styles.css']
})

export class EditorComponent implements OnInit, OnChanges { 

    @Output() overlayTappedEventEmiiter = new EventEmitter<void> ();
    @Input('goal') goal: Goal;
    
    private completedTasks:TaskCollection;
    private inCompletedTasks:TaskCollection;

    private showCompetedTasks = false;
    private lamda = 'material-icons fadded anim zeroDeg';

    constructor(private taskService:TaskService, private zone:NgZone) {}

    itemClicked(event:any, taskItem: Task) {
        
        taskItem.completed = event.checked;
        this.reBuildTasks();
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

     
     reBuildTasks() {

         if (this.goal) {
                this.goal.updateProgress();
            this.completedTasks = this.goal.getCompletedTasks();
            this.inCompletedTasks = this.goal.getInCompletedTasks();
         }
     }


    ngOnInit() {
        //this.getTasks()
        
    }

    ngOnChanges() {
        this.reBuildTasks();
    }

    getTasks() {
        /*
        this.taskService.getTasks('goal1')
            .then(tasks => this.buildTasks(tasks));
            */
    }

    onTapped(event: any) {
        console.log('Hide Class');
        event.stopPropagation();

        this.overlayTappedEventEmiiter.emit();
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

    deleteTask(taskItem: Task) {
        let removed:boolean = this.goal.tasks.remove(taskItem);
        if (removed) {
            // Rebuild the tasks
            this.reBuildTasks();
        }
    }

    addTask(event: any) {
        console.log('Enter Key Pressed: ', event.target);

        let taskTitle:string = event.target.value;
        taskTitle = taskTitle.trim();

        if (taskTitle.length > 0) {
            
            // Let's add new task in the list
            let taskItem: Task = new Task({title:taskTitle, belongsTo:this.goal.id});
            this.goal.tasks.push(taskItem);
            this.reBuildTasks();
        }
        
        event.target.value = "";
    }
}