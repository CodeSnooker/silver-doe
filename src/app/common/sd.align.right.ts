import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[sd-layout-right]'
})

export class SDLayoutAlignRightDirective {
    
    constructor (private el: ElementRef) {
        el.nativeElement.style.float = 'right';
    }
}