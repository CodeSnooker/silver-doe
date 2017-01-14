import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[sd-flex]'
})

export class SDFlexDirective {

    @Input('sd-flex') flexValue: Number;

    constructor (private el: ElementRef) {
        el.nativeElement.style.display = 'inline-block';
    }

    ngOnInit() {
        this.setWidthBasedOnFlex(this.flexValue);
    }

    private setWidthBasedOnFlex(value: Number) {
        value = value ? value : 100;
        this.el.nativeElement.style.width = '' + value + '%';
    }
}