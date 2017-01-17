import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'planner-footer',
    templateUrl: 'planner.footer.component.html',
    styleUrls: ['planner.footer.component.css']
})

export class PlannerFooterComponent {

    @Output() onTimeSelection = new EventEmitter<number> ();
    @Output() onPrint = new EventEmitter();

    onTimeSelectionEvent(interval: number) {
        console.log('Selected time: ', interval);
        this.onTimeSelection.emit(interval);
    }

    onPrintEvent () {
        console.log('Print Planner');
    }
}