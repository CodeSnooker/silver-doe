import { NgModule } from '@angular/core';


import { SDCommonModule } from './../common/common.module';
import { PlannerModule } from './../planner/planner.module';

import { EditorComponent } from './editor.component';

@NgModule({
    imports: [PlannerModule.forRoot(), SDCommonModule.forRoot()],
    declarations: [ EditorComponent ],
    exports: [EditorComponent]
})

export class EditorModule { }