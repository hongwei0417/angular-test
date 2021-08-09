import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreateJobComponent } from './txn-create-job.component';

describe('TxnCreateJobComponent', () => {
  let component: TxnCreateJobComponent;
  let fixture: ComponentFixture<TxnCreateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnCreateJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
