import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteLogPageComponent } from './execute-log-page.component';

describe('ExecuteLogPageComponent', () => {
  let component: ExecuteLogPageComponent;
  let fixture: ComponentFixture<ExecuteLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteLogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
