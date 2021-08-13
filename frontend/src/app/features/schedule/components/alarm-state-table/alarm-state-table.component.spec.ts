import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmStateTableComponent } from './alarm-state-table.component';

describe('AlarmStateTableComponent', () => {
  let component: AlarmStateTableComponent;
  let fixture: ComponentFixture<AlarmStateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmStateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmStateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
