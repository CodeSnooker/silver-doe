/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewGoalComponent } from './new-goal.component';

describe('NewGoalComponent', () => {
  let component: NewGoalComponent;
  let fixture: ComponentFixture<NewGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
