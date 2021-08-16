import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSettingComponent } from './job-setting.component';

describe('JobSettingComponent', () => {
  let component: JobSettingComponent;
  let fixture: ComponentFixture<JobSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
