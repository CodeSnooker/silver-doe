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

    onCopyEvent(event:any) {
        console.log('Copy Goal');
        event.stopPropagation();
        this.fireCopyEvent.emit();
    }

    onPrintEvent(event:any){
        event.stopPropagation();
        console.log('Print Goal');
        this.firePrintEvent.emit();
    }

    onDeleteEvent(event:any) {
        event.stopPropagation();
        console.log('Delete Goal');
        this.fireDeleteEvent.emit();
    }

    onArchiveEvent(event:any) {
        event.stopPropagation();
        console.log('Archive Goal');
        this.fireArchiveEvent.emit(true);
    }

    onUnArchiveEvent(event:any) {
        event.stopPropagation();
        console.log('UnArchive Goal');
        this.fireArchiveEvent.emit(false);
    }

}