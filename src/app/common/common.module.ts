import { NgModule, ModuleWithProviders } from '@angular/core';

import { SDFlexDirective } from './sd.flex.directive';
import { SDTextAlignCenterDirective } from './sd.text.center.directive';

@NgModule({
    declarations: [ SDFlexDirective, SDTextAlignCenterDirective ],
    exports: [ SDFlexDirective, SDTextAlignCenterDirective ]
})

export class SDCommonModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SDCommonModule
        };
    }

}