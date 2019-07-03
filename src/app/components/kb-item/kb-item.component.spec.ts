/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KbItemComponent } from './kb-item.component';

describe('KbItemComponent', () => {
  let component: KbItemComponent;
  let fixture: ComponentFixture<KbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
