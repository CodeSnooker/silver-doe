import { Task } from './task.model';
import { TaskCollection } from './task.collection.model';

let g1t1 = new Task({belongsTo:'goal1', title: 'This is normal task #1 text'});
let g1t2 = new Task({belongsTo:'goal1', title: 'This is normal task #2 text with a multiline text with no more ellipses. I think we need to add more text to test the multiline feature. What do you think?'});
let g2t1 = new Task({belongsTo:'goal2', title: 'This task has due date', dueDate: new Date('22-Jan-2017')});
let g2t2 = new Task({belongsTo:'goal2', title: 'This task has due date and percentage', dueDate: new Date('23-Jan-2017'), percent: 25, showPercentage: true});
let g3t1 = new Task({belongsTo:'goal3', title: 'This is normal completed task', completed:true, completedAt:new Date('20-Jan-2017')});
let g3t2 = new Task({belongsTo:'goal3', title: 'This is big completed task #2 text with a multiline text with no more ellipses. I think we need to add more text to test the multiline feature. What do you think?', completed:true});
let g4t1 = new Task({belongsTo:'goal4', title: 'This task is completed and has due date', completed:true, dueDate:('22-Jan-2017')});
let g4t2 = new Task({belongsTo:'goal4', title: 'This task is completed and has due date and percentage', completed:true, dueDate:('25-Jan-2017'), percentage:65});

let taskCollection: TaskCollection = new TaskCollection();
taskCollection.push(g1t1);
taskCollection.push(g1t2);
taskCollection.push(g2t1);
taskCollection.push(g2t2);
taskCollection.push(g3t1);
taskCollection.push(g3t2);
taskCollection.push(g4t1);
taskCollection.push(g4t2);

export var TASKS:TaskCollection = taskCollection;
