// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { SDCommonModule } from './../common/common.module';
import { PlannerModule } from './../planner/planner.module';
import { GoalManagerModule } from './../goalmanager/goalmanager.module';


// Components
import { LayoutComponent }  from './layout.component';

@NgModule({
  imports:      [ MaterialModule.forRoot(), BrowserModule, PlannerModule, 
                  SDCommonModule.forRoot(), DndModule.forRoot(), GoalManagerModule ],
  declarations: [ LayoutComponent ],
  bootstrap:    [ LayoutComponent ]
})
export class LayoutModule { }
