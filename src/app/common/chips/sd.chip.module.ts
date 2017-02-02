import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { SDChip } from './sd.chip.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [SDChip],
    exports: [SDChip]
})
export class SDChipsModule { }