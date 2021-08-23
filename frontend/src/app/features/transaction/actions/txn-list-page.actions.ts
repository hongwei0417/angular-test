import { createAction, props, union } from '@ngrx/store';

export const loadTxnList = createAction(
  '[TxnListPage] Load txn list table data'
);

export const clearTxnListPageState = createAction(
  '[TxnListPage] clear txn list page state'
);
