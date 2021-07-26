import { Transaction } from './../../models/Transaction';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTxn from '../../reducers';
import { TxnListActions } from '../../actions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  txnData$!: Observable<Transaction[]>;

  constructor(private store: Store<fromTxn.State>) {}

  ngOnInit(): void {
    // this.txnData$ = this.store.select(fromTxn.getTxnData); //style1
    this.txnData$ = this.store.pipe(select(fromTxn.getTxnListData)); //style2
  }

  loadTxnData() {
    this.store.dispatch(TxnListActions.loadTxnLists());
  }
}
