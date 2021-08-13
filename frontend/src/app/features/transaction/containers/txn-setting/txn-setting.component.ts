import { FQCollectionValue } from './../../reducers/frequency-setting-form.reducer';
import { getTxnCreateError } from './../../reducers/index';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromTxn from '../../reducers';
import { TxnSettingFormValue } from '../../reducers/txn-setting-form.reducer';
import { TxnSettingFormActions } from '../../actions';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-txn-setting',
  templateUrl: './txn-setting.component.html',
  styleUrls: ['./txn-setting.component.scss'],
})
export class TxnSettingComponent implements OnInit {
  settingFormState$!: Observable<FormGroupState<TxnSettingFormValue>>;
  FQSettingFormState$!: Observable<FormGroupState<FQCollectionValue>>;
  FQSettingOptions$!: Observable<number[]>;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    this.settingFormState$ = this.store$.pipe(
      select(fromTxn.getTxnSettingForm)
    );
    this.FQSettingFormState$ = this.store$.pipe(
      select(fromTxn.getFrequencySettingForm)
    );
    this.FQSettingOptions$ = this.store$.pipe(
      select(fromTxn.getFrequencySettingOptions)
    );
  }

  onAddFrequencySetting(): void {
    this.store$.dispatch(TxnSettingFormActions.addFrequencySetting());
  }

  onSubmit(): void {}
}
