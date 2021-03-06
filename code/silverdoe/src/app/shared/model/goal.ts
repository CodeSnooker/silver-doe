import { Task } from './task';

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

    static fromJson({$key, title, archived, createdAt, dueBy, priority}): Goal {
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

    static sortByPriorityAndThenDate(json: any[]) {
        return json.sort(this.sortByPriority);
    }

    static clone(goal: Goal) {
        let tempGoal: Goal = new Goal(goal.title + ' (clone)');
        tempGoal.createdAt = new Date().getTime();
        if (goal.dueBy) {
            tempGoal.dueBy = goal.dueBy;
        }
        tempGoal.archived = goal.archived;

        return tempGoal;
    }


    private static sortByPriority(a: GoalInterface, b: GoalInterface): number {
        if (a.priority == b.priority) {
            return (a.createdAt < b.createdAt) ? -1 : 1;
        } else {
            return (b.priority < a.priority) ? 1 : -1;
        }
    }


}