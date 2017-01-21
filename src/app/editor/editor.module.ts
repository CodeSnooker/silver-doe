import { NgModule } from '@angular/core';


import { SDCommonModule } from './../common/common.module';
import { PlannerModule } from './../planner/planner.module';

import { EditorComponent } from './editor.component';
import { TaskService } from './../tasks/task/task.service';

@NgModule({
    imports: [PlannerModule.forRoot(), SDCommonModule.forRoot()],
    declarations: [ EditorComponent ],
    exports: [ EditorComponent ],
    providers: [ TaskService ]
})

export class EditorModule { }