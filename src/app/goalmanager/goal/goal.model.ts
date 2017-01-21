import { Task } from './../../tasks/task/task.model';
import { TaskService } from './../../tasks/task/task.service';

export interface Goal  {
                id: string;
             title: string;
          archived: boolean;
          tasks: Task[];
}

//      getTasks() {
//         //this.taskService.getTasks(this.id).then(tasks => this.tasks = tasks);
//      }

//      getCompletedTasks() {
//         //return this.tasks.filter(task => task.completed === true);
//      } 

//      getInCompletedTasks() {
//         //return this.tasks.filter(task => task.completed === false);
//      }

