export class Task {
         readonly id: string;
               title: string;
  readonly createdAt: Date;
  private _updatedAt: Date;
 private completedAt: Date;
  private _completed:boolean = false;
             dueDate: Date;
             percent: number = 0;
      showPercentage: boolean = false;
           belongsTo: string; // Should key of Goal

    private generateRandomId():string {
        return 'task_' + Math.random() + '_' + (new Date().getTime());;
   }

    constructor(taskItem:any) {
        if (taskItem) {
            this.id = taskItem.id ? taskItem.id : this.generateRandomId();
            this.title = taskItem.title ? taskItem.title : '';
            this.createdAt = taskItem.createdAt ? taskItem.createdAt : new Date();
            this._updatedAt = taskItem.updatedAt ? taskItem.updatedAt : undefined;
            this.completedAt = taskItem.completedAt ? taskItem.completedAt : undefined;
            this.completed = taskItem.completed !== undefined ? taskItem.completed : false;
            this.dueDate = taskItem.dueDate ? taskItem.dueDate : undefined;
            this.percent = taskItem.percent ? taskItem.percent : 0;
            this.showPercentage = taskItem.showPercentage ? taskItem.showPercentage : 0;
            this.belongsTo = taskItem.belongsTo;

            if (this.completed) {
                this.percent = 100;
            }
        }
    }

    get updatedAt():Date {
        return this._updatedAt;
    }

    get completed():boolean {
        return this._completed;
    }

    set completed(finished:boolean) {
        this._completed = finished;

        if (this._completed) {
            this.completedAt = new Date();
        }
        else {
            this.completedAt = undefined;
        }
    }

    save() {
        this._updatedAt = new Date();
        console.error('Error: Task #save method not impletement yet.');
    }

    clone():Task {
        return new Task({
                title: this.title, 
                completed:this.completed, 
                percent:this.percent, 
                dueDate:this.dueDate, 
                completedAt:this.completedAt,
                belongsTo:this.belongsTo,
                showPercentage: this.showPercentage
            });
    }

}