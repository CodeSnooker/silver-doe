import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { LayoutComponent }  from './layout.component';
import { PlannerModule } from './../planner/planner.module';
import { SDCommonModule } from './../common/common.module';

@NgModule({
  imports:      [ MaterialModule.forRoot(), BrowserModule, PlannerModule, SDCommonModule.forRoot() ],
  declarations: [ LayoutComponent ],
  bootstrap:    [ LayoutComponent ]
})
export class LayoutModule { }
