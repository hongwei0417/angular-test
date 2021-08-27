import { TxnSettingFormValue } from './../../reducers/txn-setting-form.reducer';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormArrayState, FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromTxn from '../../reducers';
import { TxnSettingFormActions } from '../../actions';
import { randomInt } from 'crypto';
import { TxnFormType } from '../../models/TxnForm';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-txn-setting',
  templateUrl: './txn-setting.component.html',
  styleUrls: ['./txn-setting.component.scss'],
})
export class TxnSettingComponent implements OnInit {
  txnSettingFormState$!: Observable<FormGroupState<TxnSettingFormValue>>;
  fqOptions$!: Observable<number[]>;
  fqShowAccordions$!: Observable<boolean[]>;
  moduleOptions$!: Observable<number[]>;
  formMode$!: Observable<TxnFormType>;
  showCronDialog = false;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    this.txnSettingFormState$ = this.store$.pipe(
      select(fromTxn.getTxnSettingForm)
    );
    this.fqOptions$ = this.store$.pipe(select(fromTxn.getFqSettingOptions));
    this.fqShowAccordions$ = this.store$.pipe(
      select(fromTxn.getFqShowAccordions)
    );
    this.moduleOptions$ = this.store$.pipe(select(fromTxn.getModuleOptions));
    this.formMode$ = this.store$.select(fromTxn.getTxnFormType);
  }

  onAddFrequencySetting(): void {
    this.store$.dispatch(TxnSettingFormActions.addFrequencySetting());
  }

  onRemoveFrequencySetting(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.removeFrequencySetting({ id }));
  }

  onToggleFqAccordion(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.toggleFqAccordion({ id }));
  }

  onAddChooseModule(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.addTxnModule({ id }));
  }

  onRemoveChooseModule(id: number): void {
    this.store$.dispatch(TxnSettingFormActions.removeTxnModule({ id }));
  }

  onShowCronDialog(): void {
    this.showCronDialog = true;
  }

  setCronExpression(value: string): void {
    console.log(value);
  }
}
