import { Goal } from './goal.model';
import { GoalCollection } from './goal.collection.model';
import { GOALS } from './../goals.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class GoalService {

    getGoals() : Promise<GoalCollection> {
        return Promise.resolve(GOALS);
    }

    clone(goal: Goal): Promise<Goal> {
        let clonedObject:Goal = goal.clone();
        GOALS.push(clonedObject);
        
        return Promise.resolve(clonedObject);
    }

    remove(goal: Goal): Promise<void> {

        let index:number = GOALS.indexOf(goal);
        if (index > -1) {
            GOALS.splice(index, 1);
        }

        return Promise.resolve();
    }
}


