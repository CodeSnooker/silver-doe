import { Goal } from './goal.model';
import { GoalCollection } from './goal.collection.model';
import { GOALS } from './../goals.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class GoalService {

    getGoals() : Promise<GoalCollection> {
        return Promise.resolve(GOALS);
    }

    clone(goal: Goal): Promise<void> {
        let clonedObject:Goal = goal.clone();
        GOALS.push(clonedObject);
        
        return Promise.resolve();
    }
}


