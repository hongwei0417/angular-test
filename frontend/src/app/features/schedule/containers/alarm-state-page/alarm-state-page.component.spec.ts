import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmStatePageComponent } from './alarm-state-page.component';

describe('AlarmStatePageComponent', () => {
  let component: AlarmStatePageComponent;
  let fixture: ComponentFixture<AlarmStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmStatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
