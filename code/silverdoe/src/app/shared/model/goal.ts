import { Task } from './task';
import { Observable } from 'rxjs/Rx';

export interface GoalInterface {
    $key?: string,
    title: string,
    archived: boolean,
    createdAt: number,
    dueBy: number,
    priority: number
}

export class Goal implements GoalInterface {
    $key?: string;
    archived: boolean = false;
    createdAt: number;
    dueBy: number;
    title: string;
    priority: number = 0;

    //createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];

    constructor(title: string) {
        this.title = title;
        this.createdAt = new Date().getTime();
    }

    static fromJson({$key, title, archived, createdAt, dueBy, priority}) {
        let tempGoal: Goal = new Goal(title);
        tempGoal.archived = archived;
        tempGoal.createdAt = createdAt;
        tempGoal.dueBy = dueBy;
        tempGoal.$key = $key;
        tempGoal.priority = priority;
        return tempGoal;
    }

    static fromJsonArray(json: any[]): Goal[] {
        return json.map(Goal.fromJson);
    }


}