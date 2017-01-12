import { NgModule } from '@angular/core';

import { PlannerComponent } from './planner.component';
import { PlannerHeaderComponent } from './header/planner.header.component';

@NgModule({
    imports: [ ],
    declarations: [ PlannerComponent, PlannerHeaderComponent ],
    exports: [ PlannerComponent ]
})

export class PlannerModule { }
