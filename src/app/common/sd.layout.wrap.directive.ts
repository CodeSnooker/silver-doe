import { Directive, ElementRef, Input } from '@angular/core';

@Directive ({
    selector : '[sd-layout-wrap]'
})

export class SDLayoutWrapDirective {
    constructor (el: ElementRef) {
        el.nativeElement.style.flexWrap = 'wrap';
    }
}