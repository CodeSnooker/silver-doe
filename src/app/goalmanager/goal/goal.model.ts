import { TaskCollection } from './../../tasks/task/task.collection.model';

export class Goal  {
         readonly id: string;
               title: string;
            archived: boolean;
  private     _tasks: TaskCollection;
  readonly createdAt: Date;
  private _updatedAt: Date;
   private _progress: number = 0;

   private generateRandomId():string {
        return 'goal_' + Math.random() + '_' + (new Date().getTime());;
   }

    constructor(goalJSON:any) {
        this.id = goalJSON.id ? goalJSON.id : this.generateRandomId();
        this.title = goalJSON.title ? goalJSON.title : '';
        this.archived = (goalJSON.archived === true) ? true : false;
        this.tasks = goalJSON.tasks ? goalJSON.tasks : new TaskCollection();
        this.createdAt = goalJSON.createdAt ? goalJSON.createdAt : new Date();
        this._updatedAt = goalJSON.updatedAt ? goalJSON.updatedAt : new Date();
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(tasks:TaskCollection) {
        this._tasks = tasks;
        this.updateProgress();
    }

    get updatedAt() {
        return this._updatedAt;
    }

    get progress() {
        return this._progress;
    }

    updateProgress() {
        if (this.tasks.length > 0) {
            this._progress = (this.tasks.getCompletedTasks(true).length / this.tasks.length) * 100;
        }
        else {
            this._progress = 0;
        }
    }

    getCompletedTasks() {
        return this.tasks.getCompletedTasks(true);
    }

    getInCompletedTasks() {
        return this.tasks.getCompletedTasks(false);
    }

    clone():Goal {
        //console.error('Error: Goal #Clone method not impletement yet.');
        return new Goal({
                title: this.title, 
                tasks: this.tasks.clone(), 
                archived: this.archived
            });
    }

    save() {
        this._updatedAt = new Date();
        console.error('Error: Goal #Save method is not build yet.')
    }
}