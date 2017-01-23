import { Goal } from './goal.model';

export class GoalCollection extends Array<Goal> {

    private convertToCollection(tasks:Goal[]):GoalCollection{
        let collection:GoalCollection = new GoalCollection();
        collection.concat(tasks);
        return collection;
    }

    getUnArchived():GoalCollection {
        return this.convertToCollection(this.filter(goal => goal.archived === false));
    }

    getArchived():GoalCollection {
        return this.convertToCollection(this.filter(goal => goal.archived === true));
    }    

}