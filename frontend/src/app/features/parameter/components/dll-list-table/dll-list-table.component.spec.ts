import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DllListTableComponent } from './dll-list-table.component';

describe('DllListTableComponent', () => {
  let component: DllListTableComponent;
  let fixture: ComponentFixture<DllListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DllListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DllListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
