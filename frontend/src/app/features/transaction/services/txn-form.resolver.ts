import { filter, first, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromTxn from '../reducers';
import { TxnFormType } from '../models/TxnForm';
import { TxnFormPageActions, TxnListPageActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class TxnFormResolver implements Resolve<boolean> {
  constructor(private store$: Store<fromTxn.State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(route);
    console.log(state);
    const id = route.params.id;
    switch (route.url[0].path) {
      case TxnFormType.CREATE:
        this.store$.dispatch(TxnFormPageActions.loadCreateTxnFormPage());
        break;
      case TxnFormType.VIEW:
        this.store$.dispatch(TxnFormPageActions.loadViewTxnFormPage({ id }));
        break;
      case TxnFormType.EDIT:
        this.store$.dispatch(TxnFormPageActions.loadEditTxnFormPage({ id }));
        break;
      case TxnFormType.COPY:
        this.store$.dispatch(TxnFormPageActions.loadCopyTxnFormPage({ id }));
        break;
      default:
        break;
    }
    return this.store$.pipe(
      select(fromTxn.getTxnFormLoadCompleted),
      filter((status) => status),
      take(1)
    );
  }
}
