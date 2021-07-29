import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreateComponent } from './txn-create.component';

describe('TxnCreateComponent', () => {
  let component: TxnCreateComponent;
  let fixture: ComponentFixture<TxnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
