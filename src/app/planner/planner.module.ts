import { NgModule } from '@angular/core';

import { PlannerComponent } from './planner.component';
import { PlannerHeaderComponent } from './header/planner.header.component';
import { PlannerFooterComponent } from './footer/planner.footer.component';
import { SDCommonModule } from './../common/common.module';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [ SDCommonModule, MaterialModule.forRoot() ],
    declarations: [ PlannerComponent, PlannerHeaderComponent, PlannerFooterComponent ],
    exports: [ PlannerComponent ]
})

export class PlannerModule { }
