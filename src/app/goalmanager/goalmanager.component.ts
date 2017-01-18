import { Component } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'goal-manager',
    templateUrl: 'goalmanager.component.html',
    styleUrls: ['goalmanager.component.css']
})

export class GoalManagerComponent {

    private _listGoals: Array<string> = ['Sugar Ray Robinson Let\'s make it a very long one ','Muhammad Ali','George Foreman'];
}