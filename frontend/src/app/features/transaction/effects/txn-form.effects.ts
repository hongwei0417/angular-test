import { CoreModule } from './../../../core/core.module';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTxn from '../reducers';
import {
  debounceTime,
  distinct,
  filter,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { TxnApiActions, TxnFormPageActions } from '../actions';
import {
  ResetAction,
  setAsyncError,
  SetAsyncErrorAction,
  SetErrorsAction,
  SetUserDefinedPropertyAction,
} from 'ngrx-forms';
import { merge } from 'rxjs';

@Injectable()
export class TxnFormEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<fromTxn.State>
  ) {}

  // search$ = createEffect(() => {
  //   return this.store$.pipe(
  //     select(fromTxn.getTxnSettingForm),
  //     filter((formState) => !!formState.value.TransactionName),
  //     distinct((formState) => formState.value),
  //     debounceTime(500),
  //     map((formState) => {
  //       return new SetAsyncErrorAction(
  //         fromFrequencySetting.DynamicFrequencySettingFormState.controls.CronExpression.id,
  //         'biggerThan5',
  //         formState.value.TransactionName.length > 5
  //       );
  //     })
  //   );
  // });

  // clearTxnFormState$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(TxnCreatePageActions.clearTxnCreatePageState),
  //     mergeMap(() => {
  //       return [
  //         new ResetAction(fromTxnSetting.txnSettingFormState.id),
  //         new ResetAction(fromFrequencySetting.FrequencySettingFormState.id),
  //       ];
  //     })
  //   );
  // });
}
