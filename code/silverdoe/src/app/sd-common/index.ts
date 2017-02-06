import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SDLayoutDirective } from './sdlayout.directive';
import { SDFlexDirective } from './sdflex.directive';
import { AutofocusDirective } from './autofocus.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SDLayoutDirective,
    SDFlexDirective,
    AutofocusDirective
  ],
  exports: [
    SDLayoutDirective,
    SDFlexDirective,
    AutofocusDirective
  ]
})
export class SdCommonModule { }
