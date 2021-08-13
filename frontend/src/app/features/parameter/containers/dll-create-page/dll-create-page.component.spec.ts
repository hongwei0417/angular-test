import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DllCreatePageComponent } from './dll-create-page.component';

describe('DllCreatePageComponent', () => {
  let component: DllCreatePageComponent;
  let fixture: ComponentFixture<DllCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DllCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DllCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
