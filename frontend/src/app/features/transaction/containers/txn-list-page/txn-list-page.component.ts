import { SchedulingApiService } from 'src/app/core/services/API/scheduling-api.service';
import { FormGroupState } from 'ngrx-forms';
import { FilterFormValue } from './../../reducers/txn-list-page.reducer';
import { Observable, of } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromTxn from '../../reducers';
import { TxnListPageActions } from '../../actions';
import { TxnListTableRow } from '../../models/TxnListTable';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-txn-list-page',
  templateUrl: './txn-list-page.component.html',
  styleUrls: ['./txn-list-page.component.scss'],
})
export class TxnListPageComponent implements OnInit, OnDestroy {
  txnData$!: Observable<TxnListTableRow[]>;
  filterForm$!: Observable<FormGroupState<FilterFormValue>>;

  constructor(
    private store$: Store<fromTxn.State>,
    private schedulingApiService: SchedulingApiService
  ) {}

  ngOnInit(): void {
    this.txnData$ = this.store$.pipe(select(fromTxn.getAllTxns));
    this.filterForm$ = this.store$.pipe(select(fromTxn.getFilterForm));
    this.store$.dispatch(TxnListPageActions.loadTxnList());
    this.schedulingApiService
      .getAllSchedules()
      .pipe(retry(3))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.store$.dispatch(TxnListPageActions.clearTxnListPageState());
  }

  createNewTxn(): void {
    this.store$.dispatch(TxnListPageActions.createNewTxn());
  }

  onViewTxnInfo(id: string): void {
    this.store$.dispatch(TxnListPageActions.viewTxnInfo({ id }));
  }

  onEditTxnInfo(id: string): void {
    this.store$.dispatch(TxnListPageActions.editTxnInfo({ id }));
  }

  onCopyInfo(id: string): void {
    this.store$.dispatch(TxnListPageActions.copyTxnInfo({ id }));
  }

  onExecuteTxn(id: string): void {
    this.store$.dispatch(TxnListPageActions.executeTxn({ id }));
  }

  onReloadTxn(id: string): void {
    this.store$.dispatch(TxnListPageActions.reloadTxn({ id }));
  }
}
