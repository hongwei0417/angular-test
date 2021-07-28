import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnListTableComponent } from './txn-list-table.component';

describe('TxnListTableComponent', () => {
  let component: TxnListTableComponent;
  let fixture: ComponentFixture<TxnListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
