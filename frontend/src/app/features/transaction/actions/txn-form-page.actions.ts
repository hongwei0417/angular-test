import { createAction, props, union } from '@ngrx/store';

export const clearTxnCreatePageState = createAction(
  '[TxnFormPage] Clear TxnCreate Page State'
);

export const loadTxnInfo = createAction(
  '[TxnFormPage] Load specific transaction info',
  props<{ id: string }>()
);

export const loadCreateTxnFormPage = createAction(
  '[TxnFormPage] Initialize create txn form page state'
);

export const loadViewTxnFormPage = createAction(
  '[TxnFormPage] Initialize view txn form page state',
  props<{ id: string }>()
);

export const loadViewTxnFormPageFail = createAction(
  '[TxnFormPage] Initialize view txn form page state fail'
);

export const loadEditTxnFormPage = createAction(
  '[TxnFormPage] Initialize edit txn form page state',
  props<{ id: string }>()
);

export const loadEditTxnFormPageFail = createAction(
  '[TxnFormPage] Initialize edit txn form page state fail'
);

export const loadCopyTxnFormPage = createAction(
  '[TxnFormPage] Initialize copy txn form page state',
  props<{ id: string }>()
);

export const loadCopyTxnFormPageFail = createAction(
  '[TxnFormPage] Initialize copy txn form page state fail'
);
