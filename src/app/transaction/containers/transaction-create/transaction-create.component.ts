import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TxnCreateAction } from '../../actions';
import * as fromTxn from '../../reducers';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss'],
})
export class TransactionCreateComponent implements OnInit {
  error$!: Observable<string>;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {
    // this.errorMessage$ = this.store$.select(fromTxn.getTxnCreateError)
    this.error$ = this.store$.pipe(select(fromTxn.getTxnCreateError));
  }

  onSubmit(title: string) {
    this.store$.dispatch(TxnCreateAction.createTxnCreates({ title }));
  }

  onClearState() {
    this.store$.dispatch(TxnCreateAction.clearTxnCreateState());
  }
}
