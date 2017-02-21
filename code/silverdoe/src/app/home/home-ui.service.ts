import { Injectable } from '@angular/core';

@Injectable()
export class HomeUIService {

  private _plannerVisible: boolean;

  constructor() { }

  isPlannerVisible(): boolean {
    return this._plannerVisible;
  }

  getWidthAvailableForEditingGoal(): string {
    let element: any = document.getElementById('new-goal-container');
    return element ? (element.offsetWidth + 'px') : '0px';
  }

  getBoundingRect(): any {
    let element: any = document.getElementById('homeContainer');
    return element ? (element.getBoundingClientRect()) : {};
  }

}
