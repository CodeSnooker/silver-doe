import { NgModule } from '@angular/core';


import { SDCommonModule } from './../common/common.module';
import { PlannerModule } from './../planner/planner.module';
import { DndModule } from 'ng2-dnd';

import { EditorComponent } from './editor.component';
import { TaskService } from './../tasks/task/task.service';

@NgModule({
    imports: [PlannerModule.forRoot(), SDCommonModule.forRoot(), DndModule.forRoot()],
    declarations: [ EditorComponent ],
    exports: [ EditorComponent ],
    providers: [ TaskService ]
})

export class EditorModule { }