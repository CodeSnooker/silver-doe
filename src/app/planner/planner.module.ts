import { NgModule } from '@angular/core';

import { PlannerComponent } from './planner.component';
import { PlannerHeaderComponent } from './header/planner.header.component';
import { SDCommonModule } from './../common/common.module';

@NgModule({
    imports: [ SDCommonModule ],
    declarations: [ PlannerComponent, PlannerHeaderComponent ],
    exports: [ PlannerComponent ]
})

export class PlannerModule { }
