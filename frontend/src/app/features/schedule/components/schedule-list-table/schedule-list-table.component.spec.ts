import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleListTableComponent } from './schedule-list-table.component';

describe('ScheduleListTableComponent', () => {
  let component: ScheduleListTableComponent;
  let fixture: ComponentFixture<ScheduleListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
