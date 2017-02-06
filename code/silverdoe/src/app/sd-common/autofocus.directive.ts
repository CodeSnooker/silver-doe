import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sd-autoFocus]'
})
export class AutofocusDirective {

  constructor(public element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.focus();
  }

}
