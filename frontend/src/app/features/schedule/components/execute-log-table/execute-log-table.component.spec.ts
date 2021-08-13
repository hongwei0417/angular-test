import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteLogTableComponent } from './execute-log-table.component';

describe('ExecuteLogTableComponent', () => {
  let component: ExecuteLogTableComponent;
  let fixture: ComponentFixture<ExecuteLogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteLogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteLogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
