import { ApiService } from './../../../core/services/API/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  TxnApiActions,
  TxnFormPageActions,
  TxnListPageActions,
} from '../actions';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TransactionEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getTxnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnListPageActions.loadTxnList),
      switchMap(() => {
        return this.apiService.getTxnListData().pipe(
          map((data) => {
            return TxnApiActions.loadTxnApiSuccess({ txnData: data });
          })
        );
      })
    )
  );

  createTxn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TxnFormPageActions.createTxn)
      // exhaustMap((action) => {
      //   return this.txnFormService.createTxn$(action).pipe(
      //     map(() => TxnApiActions.createTxnApiSuccess({ txn: null })),
      //     catchError((error) => of(TxnApiActions.createTxnApiFail({ error })))
      //   );
      // })
    );
  });
}
