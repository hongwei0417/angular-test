import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreatePageComponent } from './txn-create-page';

describe('TransactionCreateComponent', () => {
  let component: TxnCreatePageComponent;
  let fixture: ComponentFixture<TxnCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TxnCreatePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
