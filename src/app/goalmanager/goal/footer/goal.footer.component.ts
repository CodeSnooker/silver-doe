import { Component } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'goal-footer',
    templateUrl: 'goal.footer.component.html',
    styleUrls: ['goal.footer.component.css']
})

export class GoalFooterComponent {

    onCopyEvent() {
        console.log('Copy Goal');
    }

    onPrintEvent(){
        console.log('Print Goal');
    }

    onDeleteEvent() {
        console.log('Delete Goal');
    }

    onArchiveEvent() {
        console.log('Archive Goal');
    }

    onUnArchiveEvent() {
        console.log('UnArchive Goal');
    }

}