import { FakeDataService } from '../../../core/services/fake-data.service';
import { TxnFormService } from '../services/txn-form.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  TxnApiActions,
  TxnCreatePageActions,
  TxnListPageActions,
} from '../actions';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private txnFormService: TxnFormService,
    private fakeDataService: FakeDataService
  ) {}

  getTxnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnListPageActions.loadTxnList),
      switchMap(() => {
        return this.fakeDataService
          .getData$()
          .pipe(
            map((txns: Transaction[]) =>
              TxnApiActions.loadTxnApiSuccess({ txns })
            )
          );
      })
    )
  );

  createTxn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TxnCreatePageActions.createTxn),
      exhaustMap((action) => {
        return this.txnFormService.createTxn$(action).pipe(
          map((txn) => TxnApiActions.createTxnApiSuccess({ txn })),
          catchError((error) => of(TxnApiActions.createTxnApiFail({ error })))
        );
      })
    );
  });

  deleteTxnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnListPageActions.deleteTxn),
      map((action) => {
        return TxnApiActions.deleteTxnApiSuccess({ id: action.id });
      })
    )
  );
}
