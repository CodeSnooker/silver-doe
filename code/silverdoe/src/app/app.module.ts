import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';

// For Material 
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Firebase
import { FirebaseModule } from './firebase';

// Modules
import { SdCommonModule } from './sd-common';

// Silver Doe components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Routes
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

// Services
import { AuthGuard } from './services/auth.service';
import { GoalsService } from './shared/model/goals.service';
import { TasksService } from './shared/model/tasks.service';
import { HomeUIService } from './home/home-ui.service';

import { TaskComponent } from './task/task.component';
import { GoalComponent } from './goal/goal.component';
import { TaskListComponent } from './task-list/task-list.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { PlannerComponent } from './planner/planner.component';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { GoalEditorComponent } from './goal-editor/goal-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    GoalComponent,
    TaskListComponent,
    GoalListComponent,
    PlannerComponent,
    NewGoalComponent,
    SidenavMenuComponent,
    GoalEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    MaterialModule.forRoot(),
    AppRoutes,
    SdCommonModule,
    DragulaModule
  ],
  providers: [
    AuthGuard,
    GoalsService,
    TasksService,
    HomeUIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
