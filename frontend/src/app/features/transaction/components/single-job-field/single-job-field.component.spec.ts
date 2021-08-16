import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobFieldComponent } from './single-job-field.component';

describe('SingleJobFieldComponent', () => {
  let component: SingleJobFieldComponent;
  let fixture: ComponentFixture<SingleJobFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleJobFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJobFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
