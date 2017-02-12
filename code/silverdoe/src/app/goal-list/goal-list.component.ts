import { Component, OnInit, Input } from '@angular/core';
import { Goal, GoalInterface } from './../shared/model/goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  @Input() goals: GoalInterface[];

  constructor() { }
  ngOnInit() {
  }

}
