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
import { combineLatest, merge, of, pipe } from 'rxjs';
import { routerNavigationAction } from '@ngrx/router-store';
import * as fromRoot from '../../../core/reducers';
import { ApiService } from 'src/app/core/services/API/api.service';
import * as fromTxnSettingForm from '../reducers/txn-setting-form.reducer';
import * as fromJobSettingForm from '../reducers/job-setting-form.reducer';

@Injectable()
export class TxnFormEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store$: Store<fromTxn.State>
  ) {}

  navigateToCreatePage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      concatLatestFrom(() => [
        this.store$.select(fromRoot.selectUrl),
        this.store$.select(fromRoot.selectQueryParams),
      ]),
      filter(([_, url]) => {
        const urlParts = url.split('?');
        return '/transaction/create' === urlParts[0];
      }),
      map(() => {
        return TxnFormPageActions.loadCreateTxnFormPage();
      })
    );
  });

  navigateToViewPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      concatLatestFrom(() => [
        this.store$.select(fromRoot.selectUrl),
        this.store$.select(fromRoot.selectQueryParams),
      ]),
      filter(([, url]) => {
        const urlParts = url.split('?');
        return urlParts.length > 1 && '/transaction/view' === urlParts[0];
      }),
      switchMap(([, , params]) => {
        return [
          new DisableAction(fromTxnSettingForm.FeatureKey),
          new DisableAction(fromJobSettingForm.FeatureKey),
          TxnFormPageActions.loadTxnInfo({ id: params.id }),
          TxnFormPageActions.loadViewTxnFormPage(),
        ];
      })
    );
  });

  navigateToEditPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      concatLatestFrom(() => [
        this.store$.select(fromRoot.selectUrl),
        this.store$.select(fromRoot.selectQueryParams),
      ]),
      filter(([_, url]) => {
        const urlParts = url.split('?');
        return urlParts.length > 1 && '/transaction/edit' === urlParts[0];
      }),
      switchMap(([, , params]) => {
        return [
          new DisableAction(
            // tslint:disable-next-line: no-non-null-assertion
            fromTxnSettingForm.txnSettingFormState.controls.basicInfo.controls.TransactionID!.id
          ),
          TxnFormPageActions.loadTxnInfo({ id: params.id }),
          TxnFormPageActions.loadEditTxnFormPage(),
        ];
      })
    );
  });

  navigateToCopyPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      concatLatestFrom(() => [
        this.store$.select(fromRoot.selectUrl),
        this.store$.select(fromRoot.selectQueryParams),
      ]),
      filter(([_, url]) => {
        const urlParts = url.split('?');
        return urlParts.length > 1 && '/transaction/copy' === urlParts[0];
      }),
      switchMap(([, , params]) => {
        return [
          TxnFormPageActions.loadTxnInfo({ id: params.id }),
          TxnFormPageActions.loadCopyTxnFormPage(),
        ];
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
