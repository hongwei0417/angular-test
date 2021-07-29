import { ITransaction } from '../../models/Transaction';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTxn from '../../reducers';
import { TxnListPageActions } from '../../actions';

@Component({
  selector: 'app-txn-list-page',
  templateUrl: './txn-list-page.component.html',
  styleUrls: ['./txn-list-page.component.scss'],
})
export class TxnListPageComponent implements OnInit {
  txnData$!: Observable<ITransaction[]>;

  constructor(private store$: Store<fromTxn.IState>) {}

  ngOnInit(): void {
    // this.txnData$ = this.store.select(fromTxn.getAllTxns); //style1
    this.txnData$ = this.store$.pipe(select(fromTxn.getAllTxns)); //style2
  }

  loadTxnData() {
    this.store$.dispatch(TxnListPageActions.loadTxnList());
  }

  onRemoveTxn(id: string) {
    this.store$.dispatch(TxnListPageActions.deleteTxn({ id }));
  }
}
