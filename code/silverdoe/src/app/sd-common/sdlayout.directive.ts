import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[sd-layout]'
})

export class SDLayoutDirective {

  @Input('sd-layout') type: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.setLayout();
  }

  private setLayout() {
    this.el.nativeElement.style.flexDirection = this.type;
    this.el.nativeElement.style.display = 'flex';
  }

}
