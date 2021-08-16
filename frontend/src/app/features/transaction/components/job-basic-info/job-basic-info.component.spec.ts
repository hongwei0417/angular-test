import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBasicInfoComponent } from './job-basic-info.component';

describe('JobBasicInfoComponent', () => {
  let component: JobBasicInfoComponent;
  let fixture: ComponentFixture<JobBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
