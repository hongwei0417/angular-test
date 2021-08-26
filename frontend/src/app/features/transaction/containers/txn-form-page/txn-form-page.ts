import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TxnFormPageActions } from '../../actions';
import * as fromTxn from '../../reducers';
import * as fromRoot from '../../../../core/reducers';
import { merge } from 'rxjs';
import { TxnFormType } from '../../models/TxnForm';

@Component({
  selector: 'app-txn-form-page',
  templateUrl: './txn-form-page.component.html',
  styleUrls: ['./txn-form-page.component.scss'],
})
export class TxnCreatePageComponent implements OnInit, OnDestroy {
  error$!: Observable<string>;
  formType$!: Observable<TxnFormType>;
  txnFormType = TxnFormType;

  constructor(
    private store$: Store<fromTxn.State>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formType$ = this.store$.select(fromTxn.getTxnFormType);
    this.route.data.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.store$.dispatch(TxnFormPageActions.clearTxnCreatePageState());
  }
}
