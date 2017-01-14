import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { LayoutComponent }  from './layout.component';
import { PlannerModule } from './../planner/planner.module';
import { SDCommonModule } from './../common/common.module';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports:      [ MaterialModule.forRoot(), BrowserModule, PlannerModule, SDCommonModule.forRoot(), DndModule.forRoot() ],
  declarations: [ LayoutComponent ],
  bootstrap:    [ LayoutComponent ]
})
export class LayoutModule { }
