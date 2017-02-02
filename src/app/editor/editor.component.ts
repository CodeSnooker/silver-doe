import { Component, OnInit, OnChanges, EventEmitter, Input, Output, DoCheck } from '@angular/core';
import { GoalService } from './../goalmanager/goal/goal.service';
import { TaskService } from './../tasks/task/task.service';
import { Task } from './../tasks/task/task.model';
import { TaskCollection } from './../tasks/task/task.collection.model';
import { Goal } from './../goalmanager/goal/goal.model';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';


@Component({
	moduleId: module.id,
	selector: 'editor-layout',
	templateUrl: 'editor.template.html',
	styleUrls: ['editor.styles.css']
})

export class EditorComponent implements OnInit, OnChanges, DoCheck {

	@Output() overlayTappedEventEmiiter = new EventEmitter<void>();
	@Input('goal') goal: Goal;

	private completedTasks: TaskCollection;
	private inCompletedTasks: TaskCollection;

	private showCompetedTasks = false;
	private lamda = 'material-icons fadded anim zeroDeg';

	constructor(private taskService: TaskService,
		private goalService: GoalService,
		private toastyService: ToastyService,
		private toastyConfig: ToastyConfig) {

		this.toastyConfig.theme = 'material';
		this.toastyConfig.position = 'top-right';
	}

	itemClicked(event: any, taskItem: Task) {
		taskItem.completed = event.checked;
		this.reBuildTasks();
	}

	onHover(event: any, index: number, completed: boolean) {
		let type: string = 'pending_';

		if (completed) {
			type = 'completed_';
		} else {
			var moveElement = document.getElementById(type + 'move_' + index);
			moveElement.style.opacity = '1.0';

			//var scheduleElement = document.getElementById(type + 'schedule_' + index);
			//scheduleElement.style.opacity = '1.0';
		}

		var deleteElement = document.getElementById(type + 'delete_' + index);
		deleteElement.style.opacity = '1.0';
	}

	onMouseOut(event: any, index: number, completed: boolean) {
		let type: string = 'pending_';

		if (completed) {
			type = 'completed_';
		} else {
			var moveElement = document.getElementById(type + 'move_' + index);
			moveElement.style.opacity = '0.0';

			//var scheduleElement = document.getElementById(type + 'schedule_' + index);
			//scheduleElement.style.opacity = '0.0';
		}

		var deleteElement = document.getElementById(type + 'delete_' + index);
		deleteElement.style.opacity = '0.0';
	}

	removeDueDateFromTask(source: any) {
		//console.log('#removeDueDateFromTask: chip => ', source);

		if (source && source.chip && source.chip.value) {
			let taskItem:Task = source.chip.value;
			taskItem.dueDate = undefined;
		}

	}

	removeDueDateFromGoal(event: any) {
		//console.log('#removeDueDateFromGoal: ', event);
	}


	reBuildTasks() {
		if (this.goal) {
			this.goal.updateProgress();
			this.completedTasks = this.goal.getCompletedTasks();
			this.inCompletedTasks = this.goal.getInCompletedTasks();
		}
	}

	ngOnInit() {
		this.reBuildTasks();
	}

	ngOnChanges(changes: any) {
		this.reBuildTasks();
	}

	ngDoCheck() {
		this.reBuildTasks();
	}

	addProgress(task:Task) {
		task.showPercentage = true;
		task.percent = task.percent ? task.percent : 0;
		//this.reBuildTasks();
	}

	removeProgress(task:Task) {
		task.showPercentage = false;
		//this.reBuildTasks();
	}

	onTapped(event: any) {
		//console.log('Hide Class');
		event.stopPropagation();

		this.overlayTappedEventEmiiter.emit();
	}

	onGoalEditorTapped(event: any) {
		event.stopPropagation();
	}

	toggleShowCompletedTasks(event: any) {
		this.showCompetedTasks = !this.showCompetedTasks;
		this.lamda = 'material-icons fadded anim zeroDeg'

		if (this.showCompetedTasks) {
			this.lamda = 'material-icons fadded anim ninetyDeg'
		}
	}

	deleteTask(taskItem: Task) {
		let removed: boolean = this.goal.tasks.remove(taskItem);
		if (removed) {
			// Rebuild the tasks
			this.reBuildTasks();
		}
	}

	addTask(event: any) {
		//console.log('Enter Key Pressed: ', event.target);

		let taskTitle: string = event.target.value;
		taskTitle = taskTitle.trim();

		if (taskTitle.length > 0) {

			// Let's add new task in the list
			let taskItem: Task = new Task({
				title: taskTitle,
				belongsTo: this.goal.id
			});
			this.goal.tasks.push(taskItem);
			this.reBuildTasks();
		}

		event.target.value = "";
	}

	onCopyGoalEvent() {
		this.goalService.clone(this.goal).then(goal => this.goal = goal);
	}

	onDeleteGoalEvent($event: any) {
		this.goalService.remove(this.goal);
		this.onTapped($event);
		this.toastyService.success({
			title: "Toast It!",
			msg: "Mmmm, tasties...",
			showClose: true,
			timeout: 5000,
			theme: "material"
		});
		//delete this.goal.tasks;
		//delete this.goal;
	}

	onArchiveGoalEvent() {
		this.goal.archived = true;
	}

	onPrintGoalEvent() {
		console.log('Print Goal: ', this.goal.title, ' is not implemented yet');
		this.toastyService.success({
			title: "Toast It!",
			msg: "Mmmm, tasties...",
			showClose: true,
			timeout: 5000,
			theme: "material"
		});

	}

	onScheduleGoalEvent() {
		console.log('Schedule Goal: ', this.goal.title, ' is not implemented yet');
	}

	onSaveGoalEvent($event: any) {
		//console.log('Save Goal: ', this.goal.title, ' is not implemented yet');
		this.onTapped($event);
	}
}

