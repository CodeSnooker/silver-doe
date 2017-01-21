import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.style.css']
})

export class LayoutComponent { 

    
    triggerHideOverlayEvent() {
        console.log('#triggerHideOverlayEvent called');
        var editorLayout = document.getElementById('goalEditor');
        editorLayout.style.opacity = '0';
        editorLayout.style.zIndex = '-100';
        setTimeout(function() {
            editorLayout.hidden = true;
        }, 600);
    }

 }