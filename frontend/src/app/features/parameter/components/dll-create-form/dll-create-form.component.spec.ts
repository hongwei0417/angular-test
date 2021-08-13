import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DllCreateFormComponent } from './dll-create-form.component';

describe('DllCreateFormComponent', () => {
  let component: DllCreateFormComponent;
  let fixture: ComponentFixture<DllCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DllCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DllCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
