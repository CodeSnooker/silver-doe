import { NgModule } from '@angular/core';

import { SDCommonModule } from './../../common/common.module'
import { MaterialModule } from '@angular/material';

import { GoalComponent } from './goal.component';
import { GoalHeaderComponent } from './header/goal.header.component';
import { GoalFooterComponent } from './footer/goal.footer.component';

import { Goal } from './goal.model';

import { GoalService } from './goal.service';


@NgModule({
    imports: [ SDCommonModule, MaterialModule.forRoot() ],
    declarations: [ GoalComponent, GoalHeaderComponent, GoalFooterComponent],
    exports: [ GoalComponent ],
    providers: [GoalService]
})

export class GoalModule {

}