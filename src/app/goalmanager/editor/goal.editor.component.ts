import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'goal-editor',
    templateUrl: './goal.editor.template.html',
    styleUrls: ['./goal.editor.styles.css']
})

export class GoalEditorComponent {

    gotFocus() {
        console.log('Got Focus');
    }

    lostFocus() {
        console.log('Lost Focus');
    }
}