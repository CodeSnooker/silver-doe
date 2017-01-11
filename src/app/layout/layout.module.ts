import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { LayoutComponent }  from './layout.component';

@NgModule({
  imports:      [ MaterialModule.forRoot(), BrowserModule ],
  declarations: [ LayoutComponent ],
  bootstrap:    [ LayoutComponent ]
})
export class LayoutModule { }
