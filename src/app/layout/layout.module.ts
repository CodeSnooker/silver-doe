// Modules
import { NgModule } from '@angular/core';

import { SDCommonModule } from './../common/common.module';
import { PlannerModule } from './../planner/planner.module';
import { GoalManagerModule } from './../goalmanager/goalmanager.module';
import { EditorModule } from './../editor/editor.module';


// Components
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [SDCommonModule.forRoot(), PlannerModule.forRoot(), GoalManagerModule, EditorModule],
  declarations: [LayoutComponent],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
