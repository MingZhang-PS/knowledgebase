/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KbListComponent } from './kb-list.component';

describe('KbListComponent', () => {
  let component: KbListComponent;
  let fixture: ComponentFixture<KbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
