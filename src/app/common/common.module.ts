import { NgModule, ModuleWithProviders } from '@angular/core';

import { SDFlexDirective } from './sd.flex.directive';
import { SDTextAlignCenterDirective } from './sd.text.center.directive';
import { SDLayoutDirective } from './sd.layout.directive';
import { SDLayoutWrapDirective } from './sd.layout.wrap.directive';
import { SDDatePipe } from './sd.date.pipe';

@NgModule({
    declarations: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe],
    exports: [ SDFlexDirective, SDTextAlignCenterDirective, SDLayoutDirective, SDLayoutWrapDirective, SDDatePipe ]
})

export class SDCommonModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SDCommonModule
        };
    }

}