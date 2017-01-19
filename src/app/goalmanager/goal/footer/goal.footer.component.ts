import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'goal-footer',
    templateUrl: 'goal.footer.component.html',
    styleUrls: ['goal.footer.component.css']
})

export class GoalFooterComponent {

    @Output() fireCopyEvent = new EventEmitter();
    @Output() firePrintEvent = new EventEmitter();
    @Output() fireDeleteEvent = new EventEmitter();
    @Output() fireArchiveEvent = new EventEmitter<boolean> ();

    onCopyEvent() {
        console.log('Copy Goal');
        this.fireCopyEvent.emit();
    }

    onPrintEvent(){
        console.log('Print Goal');
        this.firePrintEvent.emit();
    }

    onDeleteEvent() {
        console.log('Delete Goal');
        this.fireDeleteEvent.emit();
    }

    onArchiveEvent() {
        console.log('Archive Goal');
        this.fireArchiveEvent.emit(true);
    }

    onUnArchiveEvent() {
        console.log('UnArchive Goal');
        this.fireArchiveEvent.emit(false);
    }

}