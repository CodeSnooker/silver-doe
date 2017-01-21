export class Task {
       id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    completedAt: Date;
    completed:boolean = false;
    dueDate: Date;
    percent: number = 0;
    showPercentage: boolean = false;


    constructor(taskItem:any) {
        if (taskItem) {
            this.id = taskItem.id ? taskItem.id : undefined;
            this.title = taskItem.title ? taskItem.title : '';
            this.createdAt = taskItem.createdAt ? taskItem.createdAt : new Date();
            this.updatedAt = taskItem.updatedAt ? taskItem.updatedAt : undefined;
            this.completedAt = taskItem.completedAt ? taskItem.completedAt : undefined;
            this.completed = taskItem.completed !== undefined ? taskItem.completed : false;
            this.dueDate = taskItem.dueDate ? taskItem.dueDate : undefined;
            this.percent = taskItem.percent ? taskItem.percent : 0;
            this.showPercentage = taskItem.showPercentage ? taskItem.showPercentage : 0;

            if (this.completed) {
                this.percent = 100;
            }

        }
    }

}