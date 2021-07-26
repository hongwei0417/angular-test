import { Transaction } from './../models/Transaction';
import { FakeDataService } from './../../core/services/fake-data.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { TxnListActions, TxnListApiActions } from '../actions';
import { map, switchMap, toArray } from 'rxjs/operators';

@Injectable()
export class TxnListEffects {
  constructor(
    private actions$: Actions<
      TxnListActions.TxnListActionUnion | TxnListApiActions.TxnListActionUnion
    >,
    private fakeDataService: FakeDataService
  ) {}

  getTxnData = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnListActions.loadTxnLists),
      switchMap(() => {
        return this.fakeDataService
          .getData()
          .pipe(
            map((data: Transaction[]) =>
              TxnListApiActions.loadTxnListApisSuccess({ data })
            )
          );
      })
    )
  );
}
