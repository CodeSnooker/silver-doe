import { NgModule } from '@angular/core';

import { SDCommonModule } from './../../common/common.module'
import { MaterialModule } from '@angular/material';

import { GoalComponent } from './goal.component';
import { GoalHeaderComponent } from './header/goal.header.component';
import { GoalFooterComponent } from './footer/goal.footer.component';


@NgModule({
    imports: [ SDCommonModule, MaterialModule.forRoot() ],
    declarations: [ GoalComponent, GoalHeaderComponent, GoalFooterComponent ],
    exports: [ GoalComponent ]
})

export class GoalModule {

}