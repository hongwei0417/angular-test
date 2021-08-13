import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMailgrpComponent } from './choose-mailgrp.component';

describe('ChooseMailgrpComponent', () => {
  let component: ChooseMailgrpComponent;
  let fixture: ComponentFixture<ChooseMailgrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMailgrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMailgrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
