// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { PlannerModule } from './../planner/planner.module';
import { SDCommonModule } from './../common/common.module';
import { DndModule } from 'ng2-dnd';

// Components
import { LayoutComponent }  from './layout.component';

@NgModule({
  imports:      [ MaterialModule.forRoot(), BrowserModule, PlannerModule, SDCommonModule.forRoot(), DndModule.forRoot() ],
  declarations: [ LayoutComponent ],
  bootstrap:    [ LayoutComponent ]
})
export class LayoutModule { }
