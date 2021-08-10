import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailgrpListPageComponent } from './mailgrp-list-page.component';

describe('MailgrpListPageComponent', () => {
  let component: MailgrpListPageComponent;
  let fixture: ComponentFixture<MailgrpListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailgrpListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailgrpListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
