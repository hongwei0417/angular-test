import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TxnFormPageActions } from '../../actions';
import * as fromTxn from '../../reducers';

@Component({
  selector: 'app-txn-form-page',
  templateUrl: './txn-form-page.component.html',
  styleUrls: ['./txn-form-page.component.scss'],
})
export class TxnCreatePageComponent implements OnInit, OnDestroy {
  error$!: Observable<string>;

  constructor(private store$: Store<fromTxn.State>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.store$.dispatch(TxnFormPageActions.clearTxnCreatePageState());
  }

  onSubmit({ title, content, executeCount }: any): void {
    this.store$.dispatch(
      TxnFormPageActions.createTxn({ title, content, executeCount })
    );
  }
}
