import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SDLayoutDirective } from './sdlayout.directive';
import { SDFlexDirective } from './sdflex.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SDLayoutDirective,
    SDFlexDirective
  ],
  exports: [
    SDLayoutDirective,
    SDFlexDirective
  ]
})
export class SdCommonModule { }
