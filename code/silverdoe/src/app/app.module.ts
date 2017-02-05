import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// For Material 
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Firebase
import { FirebaseModule } from './firebase';

// Silver Doe components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Routes
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

// Services
import { AuthGuard } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    MaterialModule.forRoot(),
    AppRoutes
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
