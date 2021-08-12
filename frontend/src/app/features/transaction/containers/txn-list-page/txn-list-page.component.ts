import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTxn from '../../reducers';
import { TxnListPageActions } from '../../actions';
import { TxnListTableRow } from '../../models/TxnListTable';
@Component({
  selector: 'app-txn-list-page',
  templateUrl: './txn-list-page.component.html',
  styleUrls: ['./txn-list-page.component.scss'],
})
export class TxnListPageComponent implements OnInit {
  txnData$!: Observable<TxnListTableRow[]>;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    this.txnData$ = this.store$.pipe(select(fromTxn.getAllTxns));
    this.store$.dispatch(TxnListPageActions.loadTxnList());
  }
}
