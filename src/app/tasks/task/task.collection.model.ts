import { Task } from './task.model';

export class TaskCollection extends Array<Task>
{
    private convertToCollection(tasks: Task[]): TaskCollection {
        let collection: TaskCollection = new TaskCollection();
        for (let i = 0; i < tasks.length; i++) {
            collection.push(tasks[i]);
        }
        return collection;
    }

    matchDate(taskDate: Date, currentDate: Date): boolean {
        let matchFound = false;
        if (taskDate) {

            matchFound = taskDate.getDate() === currentDate.getDate();
            matchFound = matchFound && (taskDate.getMonth() === currentDate.getMonth());
            matchFound = matchFound && (taskDate.getFullYear() === currentDate.getFullYear());
            
        }

        return matchFound;
    }

    getTasksForDueDate(date: Date): TaskCollection {
        return this.convertToCollection(this.filter(task => this.matchDate(task.dueDate, date)));
    }

    getTaskById(taskId:string) {
        return this.filter(task => task.id === taskId)[0];
    }

    getTasksForGoal(goalId: string): TaskCollection {
        return this.convertToCollection(this.filter(task => task.belongsTo === goalId));
    }

    getCompletedTasks(completed: boolean): TaskCollection {
        return this.convertToCollection(this.filter(task => task.completed === completed));
    }

    clone(): TaskCollection {

        let cloneObject: TaskCollection = new TaskCollection();

        for (let i = 0; i < this.length; i++) {
            let task: Task = this[i];
            let cloneTask: Task = task.clone();
            cloneObject.push(cloneTask);
        }

        console.log('Clone TaskCollection = ', cloneObject);

        return cloneObject;
    }

    remove(taskItem: Task): boolean {
        let index: number = this.indexOf(taskItem);
        let found = false;
        if (index > -1) {
            this.splice(index, 1);
            found = true;
        }
        return found;
    }
}