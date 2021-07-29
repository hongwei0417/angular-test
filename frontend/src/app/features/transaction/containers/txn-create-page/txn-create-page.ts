import { ITransaction } from '../../models/Transaction';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TxnCreatePageActions } from '../../actions';
import * as fromTxn from '../../reducers';

@Component({
  selector: 'app-txn-create-page',
  templateUrl: './txn-create-page.component.html',
  styleUrls: ['./txn-create-page.component.scss'],
})
export class TxnCreatePageComponent implements OnInit {
  error$!: Observable<string>;

  constructor(private store$: Store<fromTxn.IState>) {}

  ngOnInit(): void {
    // this.error$ = this.store$.select(fromTxn.getTxnCreateError);
    this.error$ = this.store$.pipe(select(fromTxn.getTxnCreateError));
  }

  onSubmit({ title, content, executeCount }: any) {
    this.store$.dispatch(
      TxnCreatePageActions.createTxn({ title, content, executeCount })
    );
  }

  onClearState() {
    this.store$.dispatch(TxnCreatePageActions.clearTxnCreatePageState());
  }
}
