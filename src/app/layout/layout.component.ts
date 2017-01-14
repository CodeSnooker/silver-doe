import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'layout.component.html'
})

export class LayoutComponent { 

    listBoxers:Array<string> = ['Sugar Ray Robinson','Muhammad Ali','George Foreman','Joe Frazier','Jake LaMotta','Joe Louis','Jack Dempsey','Rocky Marciano','Mike Tyson','Oscar De La Hoya'];

 }