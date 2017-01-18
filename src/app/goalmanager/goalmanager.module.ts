import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { SDCommonModule } from './../common/common.module';
import { MaterialModule } from '@angular/material';

import { GoalModule } from './goal/goal.module';
import { GoalManagerComponent } from './goalmanager.component';

@NgModule({
    imports: [ SDCommonModule, MaterialModule.forRoot(), BrowserModule, GoalModule ],
    declarations: [ GoalManagerComponent ],
    exports: [ GoalManagerComponent ]
})

export class GoalManagerModule {}