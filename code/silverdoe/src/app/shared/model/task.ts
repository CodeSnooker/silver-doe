export interface TaskInterface {
    $key?: string,
    belongsTo: string,
    title: string,
    completed: boolean,
    hasPercentage: boolean,
    completedOn: number,
    dueBy: number,
    percent: number,
    createdAt: number,
    priority: number

}

export class Task implements TaskInterface {

    $key: string;
    belongsTo: string;
    title: string;
    completed: boolean;
    completedOn: number;
    dueBy: number;
    hasPercentage: boolean;
    percent: number;

    createdAt: number;
    priority: number;

    constructor(title: string, goalKey: string) {
        this.title = title;
        this.belongsTo = goalKey;
        this.createdAt = new Date().getTime();
        this.priority = 0;
    }

    static fromJsonList(array): Task[] {
        return array.map(Task.fromJson);
    }

    static fromJson({$key, belongsTo, title, completed, completedOn, dueBy, hasPercentage, percent, createdAt, priority}): Task {

        let tempTask: Task = new Task(title, belongsTo);
        tempTask.$key = $key;
        tempTask.completed = completed;
        tempTask.completedOn = completedOn;
        tempTask.dueBy = dueBy;
        tempTask.hasPercentage = hasPercentage;
        tempTask.percent = percent;
        tempTask.createdAt = createdAt;
        tempTask.priority = priority;
        return tempTask;
    }
}