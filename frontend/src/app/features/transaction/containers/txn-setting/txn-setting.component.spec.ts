import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnSettingComponent } from './txn-setting.component';

describe('TxnSettingComponent', () => {
  let component: TxnSettingComponent;
  let fixture: ComponentFixture<TxnSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
