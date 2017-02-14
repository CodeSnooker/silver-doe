import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {

  @Output('on-view-goals') onViewGoals: EventEmitter<void>;
  @Output('on-view-archived') onViewArchived: EventEmitter<void>;

  constructor() {
    this.onViewGoals = new EventEmitter<void>();
    this.onViewArchived = new EventEmitter<void>();
  }

  ngOnInit() {

  }

  onViewGoalsEvent($event: any) {
    this.onViewGoals.emit();
  }

  onViewArchivedEvent($event: any) {
    this.onViewArchived.emit();
  }

}
