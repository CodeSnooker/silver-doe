import { Task } from './task.model';

export class TaskCollection extends Array<Task>
{
    private convertToCollection(tasks:Task[]):TaskCollection{
        let collection:TaskCollection = new TaskCollection();
        for (let i=0; i<tasks.length; i++) {
            collection.push(tasks[i]);
        }
        return collection;
    }

    getTasksForGoal(goalId:string):TaskCollection {
        return this.convertToCollection(this.filter(task => task.belongsTo === goalId));
    }
    
    getCompletedTasks(completed:boolean):TaskCollection {
        return this.convertToCollection(this.filter(task => task.completed === completed));
    }

    clone():TaskCollection {

        let cloneObject:TaskCollection  = new TaskCollection();
        
        for (let i=0; i<this.length; i++) {
            let task:Task = this[i];
            let cloneTask:Task = task.clone();
            cloneObject.push(cloneTask);
        }

        console.log('Clone TaskCollection = ', cloneObject);

        return cloneObject;
    }

    remove(taskItem:Task):boolean {
        let index:number = this.indexOf(taskItem);
        let found = false;
        if (index > -1) {
            this.splice(index, 1);
            found = true;
        }
        return found;
    }
}