export class Task {

    constructor(
        public $key: string,
        public title: string,
        public completed: boolean,
        public completedOn: Date,
        public dueBy: Date,
        public hasPercentage: boolean,
        public percent: number

    ) {

    }

    static fromJsonList(array): Task[] {
        return array.map(Task.fromJson);
    }

    static fromJson({$key, title, completed, completedOn,
        dueBy, hasPercentage, percent}): Task {
        return new Task(
            $key,
            title,
            completed,
            completedOn,
            dueBy,
            hasPercentage,
            percent);
    }

}