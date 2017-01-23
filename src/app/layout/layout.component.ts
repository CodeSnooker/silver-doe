import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.style.css']
})

export class LayoutComponent { 

    private goal: any;
    
    triggerHideOverlayEvent() {
        console.log('#triggerHideOverlayEvent called');
        var editorLayout = document.getElementById('goalEditor');
        editorLayout.style.opacity = '0';
        editorLayout.style.zIndex = '-100';
        setTimeout(function() {
            editorLayout.hidden = true;
        }, 600);
    }

    triggetShowOverlayEvent(event:any) {
        console.log('#triggerHideOverlayEvent called: ', event.goal);
        this.goal = event.goal;
        var editorLayout = document.getElementById('goalEditor');
        editorLayout.hidden = false;    
        
        setTimeout(function() {
            editorLayout.style.opacity = '1';
            editorLayout.style.zIndex = '10';    
        }, 100);
    }

 }