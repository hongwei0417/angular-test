import { CoreModule } from './../../../core/core.module';
import { Action, select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as fromTxn from '../reducers';
import {
  catchError,
  combineAll,
  debounceTime,
  distinct,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  TxnApiActions,
  TxnFormPageActions,
  TxnListPageActions,
} from '../actions';
import {
  DisableAction,
  ResetAction,
  setAsyncError,
  SetAsyncErrorAction,
  SetErrorsAction,
  SetUserDefinedPropertyAction,
} from 'ngrx-forms';
import { combineLatest, merge, of, pipe, throwError } from 'rxjs';
import { routerNavigationAction } from '@ngrx/router-store';
import * as fromRoot from '../../../core/reducers';
import { SchedulingApiService } from 'src/app/core/services/API/scheduling-api.service';
import * as fromTxnSettingForm from '../reducers/txn-setting-form.reducer';
import * as fromJobSettingForm from '../reducers/job-setting-form.reducer';
import { TxnFormRoute } from '../models/TxnForm';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class TxnFormEffects {
  constructor(
    private actions$: Actions,
    private apiService: SchedulingApiService,
    private store$: Store<fromTxn.State>,
    private route: ActivatedRoute
  ) {}

  navigateToViewPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TxnFormPageActions.loadViewTxnFormPage),
      switchMap(() => {
        return [
          new DisableAction(fromTxnSettingForm.FeatureKey),
          new DisableAction(fromJobSettingForm.FeatureKey),
        ];
      })
    );
  });

  navigateToEditPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TxnFormPageActions.loadEditTxnFormPage),
      switchMap(() => {
        return [
          new DisableAction(
            // tslint:disable-next-line: no-non-null-assertion
            fromTxnSettingForm.txnSettingFormState.controls.basicInfo.controls.TransactionID!.id
          ),
        ];
      })
    );
  });

  navigateToFormPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        TxnFormPageActions.loadViewTxnFormPage,
        TxnFormPageActions.loadEditTxnFormPage,
        TxnFormPageActions.loadCopyTxnFormPage
      ),
      map(({ id }) => {
        return TxnFormPageActions.loadTxnInfo({ id });
      })
    );
  });

  getTxnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnFormPageActions.loadTxnInfo),
      switchMap(({ id }) => {
        return this.apiService.getTxnById(id).pipe(
          map((data) => {
            return TxnApiActions.loadTxnApiSuccess({ txnInfo: data });
          }),
          catchError((error) => {
            return of(TxnApiActions.loadTxnApiFailure({ error }));
          })
        );
      })
    )
  );

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
