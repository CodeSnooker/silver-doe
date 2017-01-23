import { Goal } from './Goal/goal.model';
import { Task } from './../tasks/task/task.model'; 
import { GoalCollection } from './goal/goal.collection.model';

let goal1 = new Goal({id:'goal1', title:'Goal #1'});
let goal2 = new Goal({id:'goal2', title:'Goal #2'});
let goal3 = new Goal({id:'goal3', title:'Goal #3'});
let goal4 = new Goal({id:'goal4', title:'Goal #4'});

let goalCollection = new GoalCollection();
goalCollection.push(goal1);
goalCollection.push(goal2);
goalCollection.push(goal3);
goalCollection.push(goal4);

export var GOALS: GoalCollection = goalCollection;