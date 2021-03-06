import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AngularFireModule } from 'angularfire2';


// Components 
import { SDChipsModule } from './chips/index';

// Directives
import { SDFlexDirective } from './sd.flex.directive';
import { SDTextAlignCenterDirective } from './sd.text.center.directive';
import { SDLayoutDirective } from './sd.layout.directive';
import { SDLayoutWrapDirective } from './sd.layout.wrap.directive';
import { SDLayoutAlignRightDirective } from './sd.align.right';

// Pipes
import { SDDatePipe } from './sd.date.pipe';
import { SDFilterPipe } from './sd.filter.pipe';
import { SDTruncatePipe } from './sd.truncate.pipe';

export const firebaseConfig = {
    apiKey: "AIzaSyD9taKu2o17RAEkKz4y2UlfrFriaVhbrSw",
    authDomain: "silver-doe.firebaseapp.com",
    databaseURL: "https://silver-doe.firebaseio.com",
    storageBucket: "silver-doe.appspot.com",
    messagingSenderId: "969629471883"
};

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        CommonModule,
        FormsModule,
        ToastyModule.forRoot(),
        SDChipsModule,
        DragulaModule,
        AngularFireModule.initializeApp(firebaseConfig)],
    declarations: [
        SDFlexDirective,
        SDTextAlignCenterDirective,
        SDLayoutDirective,
        SDLayoutWrapDirective,
        SDDatePipe,
        SDLayoutAlignRightDirective,
        SDFilterPipe,
        SDTruncatePipe],
    exports: [
        SDFlexDirective,
        SDTextAlignCenterDirective,
        SDLayoutDirective,
        SDLayoutWrapDirective,
        SDDatePipe,
        MaterialModule,
        BrowserModule,
        SDLayoutAlignRightDirective,
        SDFilterPipe,
        FormsModule,
        SDTruncatePipe,
        ToastyModule,
        SDChipsModule,
        DragulaModule]
})

export class SDCommonModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SDCommonModule
        };
    }

}