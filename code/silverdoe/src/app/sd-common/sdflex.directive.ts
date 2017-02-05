import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[sd-flex]'
})

export class SDFlexDirective {

  @Input('sd-flex') flexValue: number;

  constructor(private el: ElementRef) {
    el.nativeElement.style.display = 'block';
  }

  ngOnInit() {
    this.setWidthBasedOnFlex(this.flexValue);
  }

  private setWidthBasedOnFlex(value: number) {
    value = value ? value : 100;
    value = Math.abs(value);
    value = Math.max(value, 1);
    value = Math.min(value, 100);

    if (value == 100) {
      this.el.nativeElement.style.flex = '1 auto';
    }
    else {
      this.el.nativeElement.style.flexGrow = 1;
      this.el.nativeElement.style.flexShrink = 1;
      this.el.nativeElement.style.flexBasis = value + '%';
    }
  }

}
