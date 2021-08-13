import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DllListPageComponent } from './dll-list-page.component';

describe('DllListPageComponent', () => {
  let component: DllListPageComponent;
  let fixture: ComponentFixture<DllListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DllListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DllListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
