import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgrpListTableComponent } from './mailgrp-list-table.component';

describe('MailgrpListTableComponent', () => {
  let component: MailgrpListTableComponent;
  let fixture: ComponentFixture<MailgrpListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailgrpListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgrpListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
