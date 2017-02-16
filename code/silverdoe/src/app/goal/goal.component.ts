import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';
import { GoalsService } from './../shared/model/goals.service';
import { Observable } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  @Input() goal: Goal;

  private overlayElement: any;
  private overlayElementStyle: any;
  private goalElement: any;
  private goalCardStyle: any;
  private elementStyleHistory: any = {};

  private editorInvisibleClassBool: boolean;
  private goalZIndexBool: boolean;

  constructor(private goalsService: GoalsService, public snackBar: MdSnackBar, private element: ElementRef) {
    this.editorInvisibleClassBool = false;
    this.goalZIndexBool = false;

  }

  ngOnInit() {
    this.goalElement = this.element.nativeElement.querySelector('.sd-card');
    this.goalCardStyle = this.element.nativeElement.querySelector('.sd-card').style;
    this.goalCardStyle.width = this.goalElement.clientWidth + "px";
    this.goalCardStyle.left = this.goalElement.offsetLeft + "px";
  }

  onDeleteEvent($event: any) {
    $event.stopPropagation();
    this.goalsService.removeGoal(this.goal).then(() => {
      this.showMessage('Goal deleted successfully');
    });
  }

  onToggleArchiveEvent($event: any) {
    $event.stopPropagation();
    this.goalsService.updateGoal(this.goal, { archived: !this.goal.archived }).then(() => {
      this.showMessage('Goal ' + (this.goal.archived ? 'activated' : 'archived') + ' successfully');
    });
  }

  onCopyEvent($event: any) {
    $event.stopPropagation();
    this.goalsService.createClone(this.goal).then(() => {
      this.showMessage('Goal duplicated successfully');
    });
  }

  showMessage(text: string) {
    this.snackBar.open(text, "Close", {
      duration: 5000,
    });
  }
}
