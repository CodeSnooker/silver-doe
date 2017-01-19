import { Goal } from './goal.model';
import { GOALS } from './../goals.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class GoalService {

    getGoals() : Promise<Goal[]> {
        return Promise.resolve(GOALS);
    }

}


