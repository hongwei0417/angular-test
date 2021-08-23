import { createAction, props, union } from '@ngrx/store';

export const loadTxnList = createAction('[TxnListPage] Load TxnList');

export const clearTxnListPageState = createAction(
  '[TxnListPage] Clear TxnList State'
);
