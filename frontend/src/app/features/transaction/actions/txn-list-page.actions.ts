import { createAction, props } from '@ngrx/store';

export const loadTxnList = createAction(
  '[TxnListPage] Load txn list table data'
);

export const clearTxnListPageState = createAction(
  '[TxnListPage] Clear txn list page state'
);

export const createNewTxn = createAction(
  '[TxnListPage] Create specific transaction info'
);

export const viewTxnInfo = createAction(
  '[TxnListPage] View specific transaction info',
  props<{ id: string }>()
);

export const editTxnInfo = createAction(
  '[TxnListPage] Edit specific transaction info',
  props<{ id: string }>()
);

export const copyTxnInfo = createAction(
  '[TxnListPage] Copy specific transaction info',
  props<{ id: string }>()
);

export const executeTxn = createAction(
  '[TxnListPage] Run specific transaction',
  props<{ id: string }>()
);

export const reloadTxn = createAction(
  '[TxnListPage] Reload specific transaction',
  props<{ id: string }>()
);
