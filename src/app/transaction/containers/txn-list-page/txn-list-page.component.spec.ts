import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnListPageComponent } from './txn-list-page.component';

describe('TransactionListComponent', () => {
  let component: TxnListPageComponent;
  let fixture: ComponentFixture<TxnListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TxnListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
