import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[sd-center]'
})

export class SDTextAlignCenterDirective {
    
    constructor (private el: ElementRef) {
        el.nativeElement.style.textAlign = 'center';
    }
}