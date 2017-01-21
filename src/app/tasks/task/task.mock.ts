import { Task } from './task.model';

var plannerTask: Task[] = [

];

var goal1Tasks: Task[] = [ 
    {
        id: 'Goal#1_T1',
        title: 'This is normal task #1 text',
        createdAt: new Date('20-Jan-2017'),
        updatedAt: undefined,
        completedAt: undefined,
        completed: false,
        dueDate: undefined,
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T2',
        title: 'This is normal task #2 text with a multiline text with no more ellipses. I think we need to add more text to test the multiline feature. What do you think?',
        createdAt: new Date('19-Jan-2017'),
        updatedAt: undefined,
        completedAt: undefined,
        completed: false,
        dueDate: undefined,
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T3',
        title: 'This task has due date',
        createdAt: new Date('18-Jan-2017'),
        updatedAt: undefined,
        completedAt: undefined,
        completed: false,
        dueDate: new Date('22-Jan-2017'),
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T4',
        title: 'This task with due date and percentage',
        createdAt: new Date('18-Jan-2017'),
        updatedAt: undefined,
        completedAt: undefined,
        completed: false,
        dueDate: new Date('23-Jan-2017'),
        percent: 25,
        showPercentage: true
    },
    {
        id: 'Goal#1_T5',
        title: 'This is normal completed task',
        createdAt: new Date('18-Jan-2017'),
        updatedAt: undefined,
        completedAt: new Date('20-Jan-2017'),
        completed: true,
        dueDate: undefined,
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T6',
        title: 'This is normal completed task #2 text with a multiline text with no more ellipses. I think we need to add more text to test the multiline feature. What do you think?',
        createdAt: new Date('19-Jan-2017'),
        updatedAt: undefined,
        completedAt: new Date('20-Jan-2017'),
        completed: true,
        dueDate: undefined,
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T7',
        title: 'This task is completed and has due date',
        createdAt: new Date('18-Jan-2017'),
        updatedAt: undefined,
        completedAt: undefined,
        completed: true,
        dueDate: new Date('22-Jan-2017'),
        percent: 0,
        showPercentage: false
    },
    {
        id: 'Goal#1_T8',
        title: 'This task is completed and has due date and percentage',
        createdAt: new Date('18-Jan-2017'),
        updatedAt: undefined,
        completedAt: new Date('21-Jan-2017'),
        completed: true,
        dueDate: new Date('21-Jan-2017'),
        percent: 25,
        showPercentage: true
    }
    
]

var goal2Tasks: Task[] = [
    
]

var goal3Tasks: Task[] = [
    
]

var goal4Tasks: Task[] = [
    
]

var newGoalTasks: Task[] = [
    
]


export var TASKS: any = {
    forPlanner: plannerTask,
    goal1: goal1Tasks,
    goal2: goal2Tasks,
    goal3: goal3Tasks,
    goal4: goal4Tasks,
    newGoalTasks: newGoalTasks

}