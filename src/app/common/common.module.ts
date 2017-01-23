import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

// Directives
import { SDFlexDirective } from './sd.flex.directive';
import { SDTextAlignCenterDirective } from './sd.text.center.directive';
import { SDLayoutDirective } from './sd.layout.directive';
import { SDLayoutWrapDirective } from './sd.layout.wrap.directive';
import { SDLayoutAlignRightDirective } from './sd.align.right';

// Pipes
import { SDDatePipe } from './sd.date.pipe';
import { SDFilterPipe} from './sd.filter.pipe';

@NgModule({
    imports: [MaterialModule.forRoot(), BrowserModule, CommonModule],
    declarations: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe, SDLayoutAlignRightDirective, SDFilterPipe],
    exports: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe, MaterialModule, BrowserModule, SDLayoutAlignRightDirective, SDFilterPipe ]
})

export class SDCommonModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SDCommonModule
        };
    }

}