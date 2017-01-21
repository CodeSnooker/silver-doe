import { Component } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'editor-layout',
    templateUrl: 'editor.template.html',
    styleUrls: ['editor.styles.css']
})

export class EditorComponent { 

    private showCompetedTasks = false;

    onTapped(event: any) {
        console.log('Hide Class');
        event.stopPropagation();
    }

    onGoalEditorTapped(event: any) {
        event.stopPropagation();
    }

    toggleShowCompletedTasks(event:any) {
        this.showCompetedTasks = !this.showCompetedTasks;

        var target = event.target;
        var buttons = target.getElementsByTagName('button');
        var targetButton: any, targetIcon: any;
        if (buttons) {
            targetButton = buttons[0];
            var icons = targetButton.getElementsByTagName('i');
            if (icons) {
                targetIcon = icons[0];
                if (this.showCompetedTasks) {
                    targetIcon.style.transform = 'rotateZ(0deg)';
                }
                else {
                    targetIcon.style.transform = 'rotateZ(-90deg)';
                    
                }
            }
        }

        
        console.log('Toggle Completed Tasks: ', event.target);
    }

    expandCompletedTasks() {

    }

    collapseCompletedTasks() {

    }
}