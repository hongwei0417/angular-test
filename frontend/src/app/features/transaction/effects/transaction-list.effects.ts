import { Action, Store } from '@ngrx/store';
import { ApiService } from '../../../core/services/API/api.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { TxnApiActions, TxnListPageActions } from '../actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { combineLatest, of, zip } from 'rxjs';
import { Router } from '@angular/router';
import { routerNavigationAction } from '@ngrx/router-store';
import * as fromRoot from '../../../core/reducers';

@Injectable()
export class TransactionListEffects {
  constructor(
    private store$: Store,
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router
  ) {}

  getAllTxnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TxnListPageActions.loadTxnList),
      switchMap(() => {
        return this.apiService.getAllTxn().pipe(
          map((data) => {
            return TxnApiActions.loadAllTxnApiSuccess({ txnData: data });
          })
        );
      })
    )
  );

  createNewTxn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(TxnListPageActions.createNewTxn),
        tap(() => {
          this.router.navigate(['transaction', 'create']);
        })
      );
    },
    { dispatch: false }
  );

  viewTxnInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(TxnListPageActions.viewTxnInfo),
        tap(({ id }) => {
          const url = this.router.serializeUrl(
            this.router.createUrlTree(['/transaction/view'])
          );
          window.open(`${url}?id=${id}`, '_blank');
        })
      );
    },
    { dispatch: false }
  );

  editTxnInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(TxnListPageActions.editTxnInfo),
        tap(({ id }) => {
          const url = this.router.serializeUrl(
            this.router.createUrlTree(['/transaction/edit'])
          );
          window.open(`${url}?id=${id}`, '_blank');
        })
      );
    },
    { dispatch: false }
  );

  copyTxnInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(TxnListPageActions.copyTxnInfo),
        tap(({ id }) => {
          const url = this.router.serializeUrl(
            this.router.createUrlTree(['/transaction/copy'])
          );
          window.open(`${url}?id=${id}`, '_blank');
        })
      );
    },
    { dispatch: false }
  );

  // navigateToPageWithID = (action: any, path: string) => {
  //   return this.actions$.pipe(
  //     ofType(action),
  //     tap(({ id }) => {
  //       const url = this.router.serializeUrl(this.router.createUrlTree([path]));
  //       window.open(`${url}?id=${id}`, '_blank');
  //     })
  //   );
  // };
}