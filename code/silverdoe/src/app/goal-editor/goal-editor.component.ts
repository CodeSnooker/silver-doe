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
  }

  ngOnChanges() {
    if (this.localGoal) {
      this._goalAvailable = true;
      console.log('GoalEditorComponent #ngOnChanges => ', this.localGoal);
      this.activateEditor();
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
    }
  }

  private deActivateEditor() {
    console.log('Deactivating Editor');
    if (this.overlayElementStyle) {
      this.overlayElementStyle.opacity = 0;
      this.overlayElementStyle.zIndex = -1;
    }
  }

  private closeEditor() {
    this._goalAvailable = false;
    this.deActivateEditor();
    this.onCloseEditorEmitter.emit();
  }

}
