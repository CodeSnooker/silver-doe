import { Directive, ElementRef, Input } from '@angular/core';

@Directive ({
    selector: 'sd-card'
})

export class SDCard {

    constructor (private el: ElementRef) {

    }

}