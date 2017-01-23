import { Task } from './task.model';
import { TaskCollection } from './task.collection.model';
import { TASKS } from './task.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

     private static dynamicSort(property:any) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a:any,b:any) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    private dynamicSortMultiple() {
       /*
        * save the arguments object as it will be overwritten
        * note that arguments object is an array-like object
        * consisting of the names of the properties to sort by
        */
        var props = arguments;
        return function (obj1:any, obj2:any) {
            var i = 0, result = 0, numberOfProperties = props.length;
            /* try getting a different result from 0 (equal)
            * as long as we have extra properties to compare
            */
            while(result === 0 && i < numberOfProperties) {
                result = TaskService.dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        }
    }

    getTasks(goalID:string): Promise<TaskCollection> {
        return Promise.resolve(TASKS.getTasksForGoal(goalID));
    }
}


