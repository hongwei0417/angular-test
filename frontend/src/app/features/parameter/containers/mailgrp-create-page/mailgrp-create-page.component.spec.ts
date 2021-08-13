import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgrpCreatePageComponent } from './mailgrp-create-page.component';

describe('MailgrpCreatePageComponent', () => {
  let component: MailgrpCreatePageComponent;
  let fixture: ComponentFixture<MailgrpCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailgrpCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgrpCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
