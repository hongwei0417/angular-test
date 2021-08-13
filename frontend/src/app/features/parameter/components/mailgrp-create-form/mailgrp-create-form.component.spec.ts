import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgrpCreateFormComponent } from './mailgrp-create-form.component';

describe('MailgrpCreateFormComponent', () => {
  let component: MailgrpCreateFormComponent;
  let fixture: ComponentFixture<MailgrpCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailgrpCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgrpCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
