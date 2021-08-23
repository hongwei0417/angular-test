import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteLogSearchComponent } from './execute-log-search.component';

describe('ExecuteLogSearchComponent', () => {
  let component: ExecuteLogSearchComponent;
  let fixture: ComponentFixture<ExecuteLogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteLogSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteLogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
