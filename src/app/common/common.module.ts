import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { SDFlexDirective } from './sd.flex.directive';
import { SDTextAlignCenterDirective } from './sd.text.center.directive';
import { SDLayoutDirective } from './sd.layout.directive';
import { SDLayoutWrapDirective } from './sd.layout.wrap.directive';
import { SDDatePipe } from './sd.date.pipe';
import { SDLayoutAlignRightDirective } from './sd.align.right';

@NgModule({
    imports: [MaterialModule.forRoot(), BrowserModule, CommonModule],
    declarations: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe, SDLayoutAlignRightDirective],
    exports: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe, MaterialModule, BrowserModule, SDLayoutAlignRightDirective ]
})

export class SDCommonModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SDCommonModule
        };
    }

}