import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ElementRef } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';
import { GoalsService } from './../shared/model/goals.service';

@Component({
  selector: 'app-goal-editor',
  templateUrl: './goal-editor.component.html',
  styleUrls: ['./goal-editor.component.css']
})
export class GoalEditorComponent implements OnInit, OnChanges {

  @Input() localGoal: Goal;
  @Input() dimensions: any;
  @Output('onCloseEditor') onCloseEditorEmitter: EventEmitter<void>;

  private _goalAvailable: boolean = false;
  private overlayElement: any;
  private overlayElementStyle: any;


  constructor(private element: ElementRef) {
    this.onCloseEditorEmitter = new EventEmitter<void>();
  }

  ngOnInit() {
    this.overlayElement = this.element.nativeElement.querySelector('.app-overlay');
    this.overlayElementStyle = this.overlayElement.style;

    console.log('#ngOnInit');

    let goalElement: any = document.getElementById('currentGoal');
    goalElement.style.width = '320px';
    //goalElement.style.background= 'white';
    goalElement.style.minHeight = '200px';
  }

  ngOnChanges() {
    if (this.localGoal) {
      this._goalAvailable = true;
      console.log('GoalEditorComponent #ngOnChanges => ', this.localGoal);
      this.activateEditor();
      let goalElement: any = document.getElementById('currentGoal');
      console.log('goalElement (2): ', goalElement);
    }
    else {
      this.deActivateEditor();
    }
  }

  private activateEditor() {
    console.log('Activating Editor...');
    if (this.overlayElementStyle) {
      this.overlayElementStyle.opacity = 1;
      this.overlayElementStyle.zIndex = 10;

      let goalElement: any = document.getElementById('currentGoal');
      console.log('goalElement (1): ', goalElement);

      if (goalElement) {
        goalElement.style.transitionDuration = '0ms';
        goalElement.style.left = this.dimensions.left + 'px';
        goalElement.style.top = this.dimensions.top + 'px';
        goalElement.style.opacity = 1;
        goalElement.style.zIndex = 12;
        goalElement.style.width = '316px';

        setTimeout(() => {
          goalElement.style.transitionDuration = '300ms'
          goalElement.style.width = '620px';
        }, 1);


      }

      //goalElement.style.offsetLeft = this.dimensions.left;
      //goalElement.style.offsetTop = this.dimensions.top;

    }
  }

  private deActivateEditor() {
    console.log('Deactivating Editor');
    if (this.overlayElementStyle) {
      //this.overlayElementStyle.opacity = 0;
      this.overlayElementStyle.zIndex = -1;

      let goalElement: any = document.getElementById('currentGoal');
      if (goalElement) {
        //goalElement.style.transitionDuration = '0ms';
        goalElement.style.left = this.dimensions.left + 'px';
        goalElement.style.top = this.dimensions.top + 'px';
        //goalElement.style.opacity = 0;
        //goalElement.style.zIndex = -1;

        goalElement.style.width = '316px';
      }


    }
  }

  private closeEditor() {
    this._goalAvailable = false;
    this.deActivateEditor();
    this.onCloseEditorEmitter.emit();
  }

}
