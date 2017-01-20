import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { SDCommonModule } from './../common/common.module';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { GoalEditorComponent } from './editor/goal.editor.component';
import { GoalManagerComponent } from './goalmanager.component';
import { GoalModule } from './goal/goal.module';

//import { DragulaModule } from 'ng2-dragula';



@NgModule({
    imports: [ SDCommonModule, MaterialModule.forRoot(), BrowserModule, GoalModule, DndModule.forRoot() ],
    declarations: [ GoalManagerComponent, GoalEditorComponent ],
    exports: [ GoalManagerComponent ]
})

export class GoalManagerModule {}